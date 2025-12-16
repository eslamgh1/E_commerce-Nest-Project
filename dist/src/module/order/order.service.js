"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const order_repositories_1 = require("../../DB/repositories/order.repositories");
const cart_repositories_1 = require("../../DB/repositories/cart.repositories");
const coupon_repositories_1 = require("../../DB/repositories/coupon.repositories");
const common_2 = require("../../common");
const stripe_services_1 = require("../../common/service/stripe.services");
let OrderService = class OrderService {
    orderRepo;
    cartRepo;
    couponRepo;
    productRepo;
    stripService;
    constructor(orderRepo, cartRepo, couponRepo, productRepo, stripService) {
        this.orderRepo = orderRepo;
        this.cartRepo = cartRepo;
        this.couponRepo = couponRepo;
        this.productRepo = productRepo;
        this.stripService = stripService;
    }
    async createOrder(body, user) {
        const { phone, address, paymentMethod, couponCode } = body;
        let coupon;
        if (couponCode) {
            coupon = await this.couponRepo.findOne({
                filter: {
                    code: couponCode,
                    usedBy: { $ne: user._id }
                },
            });
            if (!coupon) {
                throw new common_1.ConflictException('Coupon not found');
            }
        }
        const cart = await this.cartRepo.findOne({ filter: { createdBy: user._id } });
        if (!cart || !cart.products.length) {
            throw new common_1.ConflictException('Cart not found');
        }
        for (const product of cart.products) {
            const productData = await this.productRepo.findOne({
                filter: {
                    _id: product.productId,
                    stock: { $gte: product.quantity }
                }
            });
            if (!productData) {
                throw new common_1.ConflictException('Product not found');
            }
        }
        const order = await this.orderRepo.create({
            userID: user._id,
            cart: cart._id,
            coupon: couponCode ? coupon._id : undefined,
            totalPrice: couponCode ? cart.subTotal - (cart.subTotal * coupon.amount / 100) : cart.subTotal,
            address,
            phone,
            paymentMethod,
            status: paymentMethod == common_2.paymentMethodEnum.cash ? common_2.orderStatusEnum.placed : common_2.orderStatusEnum.pending,
        });
        for (const product of cart.products) {
            await this.productRepo.findOneAndUpdate({
                filter: {
                    _id: product.productId,
                },
                update: {
                    $inc: { stock: -product.quantity }
                },
                options: {
                    new: true
                }
            });
        }
        if (coupon) {
            await this.couponRepo.findOneAndUpdate({
                filter: { _id: coupon._id },
                update: {
                    $push: { usedBy: user._id }
                },
                options: {
                    new: true
                }
            });
        }
        if (paymentMethod == common_2.paymentMethodEnum.cash) {
            await this.cartRepo.findOneAndUpdate({
                filter: {
                    _id: cart._id
                },
                update: {
                    $set: {
                        products: []
                    }
                },
                options: {
                    new: true
                }
            });
        }
        return order;
    }
    async paymentWithStrip(id, user) {
        const order = await this.orderRepo.findOne({
            filter: {
                _id: id,
                status: common_2.orderStatusEnum.pending
            },
            options: {
                populate: [
                    {
                        path: "cart",
                        populate: [{
                                path: "products.productId"
                            }
                        ]
                    },
                    {
                        path: "coupon",
                    }
                ]
            }
        });
        console.log({ order });
        if (!order || !order.cart["products"].length) {
            throw new common_1.ConflictException('order not found');
        }
        let coupon;
        if (order.coupon) {
            coupon = await this.stripService.createCoupon({
                percent_off: order.coupon?.amount,
            });
        }
        const { url } = await this.stripService.createCheckOutSession({
            customer_email: user.email,
            metadata: {
                orderId: order._id.toString(),
            },
            line_items: order.cart["products"].map((product) => ({
                price_data: {
                    currency: 'egp',
                    product_data: {
                        name: product.productId.name,
                    },
                    unit_amount: Math.round(product.finalPrice * 100),
                },
                quantity: product.quantity,
            })),
            discounts: coupon ? [{ coupon: coupon.id }] : []
        });
        return { url };
    }
    async webhook(body) {
        const orderId = body.data.object.metadata.orderId;
        const order = await this.orderRepo.findOneAndUpdate({
            filter: {
                _id: orderId
            },
            update: {
                status: common_2.orderStatusEnum.paid,
                orderChanges: {
                    paidAt: Date.now(),
                },
                paymentIntent: body.data.object.payment_intent
            },
            options: {}
        });
        return { order };
    }
    async refundedOrder(id, user) {
        let order = await this.orderRepo.findOneAndUpdate({
            filter: {
                _id: id,
                status: { $in: [common_2.orderStatusEnum.pending, common_2.orderStatusEnum.placed] }
            },
            update: {
                status: common_2.orderStatusEnum.canceled,
                orderChanges: {
                    canceledAt: Date.now(),
                    canceledBy: user._id
                },
            },
            options: {
                new: true
            }
        });
        if (!order) {
            throw new common_1.BadGatewayException("order not found");
        }
        if (order.paymentMethod == common_2.paymentMethodEnum.visa)
            await this.stripService.createRefundPayment({
                payment_intent: order.paymentIntent
            });
        order = await this.orderRepo.findOneAndUpdate({
            filter: {
                _id: id,
            },
            update: {
                status: common_2.orderStatusEnum.refunded,
                orderChanges: {
                    canceledAt: Date.now(),
                    refundBy: user._id
                },
            },
            options: {
                new: true
            }
        });
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repositories_1.OrderRepo,
        cart_repositories_1.CartRepo,
        coupon_repositories_1.CouponRepo,
        DB_1.ProductRepo,
        stripe_services_1.StripeServices])
], OrderService);
//# sourceMappingURL=order.service.js.map