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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const socket_gateway_1 = require("../gateway/socket.gateway");
let CartService = class CartService {
    cartRepo;
    ProductRepo;
    SocketGateway;
    constructor(cartRepo, ProductRepo, SocketGateway) {
        this.cartRepo = cartRepo;
        this.ProductRepo = ProductRepo;
        this.SocketGateway = SocketGateway;
    }
    async createCart(body, user) {
        const { productId, quantity } = body;
        const product = await this.ProductRepo.findOne({
            filter: { _id: productId,
                stock: { $gte: quantity }
            }
        });
        if (!product) {
            throw new common_1.BadRequestException('product not found');
        }
        const cart = await this.cartRepo.findOne({
            filter: {
                createdBy: user._id,
            }
        });
        if (!cart) {
            const newCart = await this.cartRepo.create({
                products: [
                    {
                        productId,
                        quantity,
                        finalPrice: product.price
                    }
                ],
                createdBy: user._id,
            });
            return newCart;
        }
        const productCart = cart.products.find((product) => product.productId.toString() === productId.toString());
        if (productCart) {
            throw new common_1.BadRequestException('product already exists in cart');
        }
        cart.products.push({
            productId,
            quantity,
            finalPrice: product.price
        });
        this.SocketGateway.handleProductQunantityChange(productId, quantity);
        await cart.save();
        return cart;
    }
    async removeProductFromCart(id, user) {
        const product = await this.ProductRepo.findOne({
            filter: { _id: id
            }
        });
        if (!product) {
            throw new common_1.BadRequestException('product not found');
        }
        const cart = await this.cartRepo.findOne({
            filter: {
                createdBy: user._id,
                products: { $elemMatch: { productId: id } }
            }
        });
        if (!cart) {
            throw new common_1.BadRequestException('cart not found');
        }
        cart.products = cart.products.filter((product) => product.productId.toString() !== id.toString());
        await cart.save();
        return cart;
    }
    async updateQuantityFromCart(id, user, body) {
        const { quantity } = body;
        const cart = await this.cartRepo.findOne({
            filter: {
                createdBy: user._id,
                products: { $elemMatch: { productId: id } }
            }
        });
        if (!cart) {
            throw new common_1.BadRequestException('cart not found');
        }
        cart.products.find((product) => {
            if (product.productId.toString() === id.toString()) {
                product.quantity = quantity;
            }
            return product;
        });
        await cart.save();
        return cart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.CartRepo,
        DB_1.ProductRepo,
        socket_gateway_1.SocketGateway])
], CartService);
//# sourceMappingURL=cart.service.js.map