
import { ConflictException, Injectable } from '@nestjs/common';
import { HUserDocument, ProductRepo } from 'src/DB';
import { OrderRepo } from 'src/DB/repositories/order.repositories';
import { CartRepo } from 'src/DB/repositories/cart.repositories';
import { CouponRepo } from 'src/DB/repositories/coupon.repositories';
import { CreateOrderDto } from './order.dto';
import { orderStatusEnum, paymentMethodEnum } from 'src/common';

@Injectable()
export class OrderService {
    // inject order repo
    constructor(
        private readonly orderRepo: OrderRepo,
        private readonly cartRepo: CartRepo,
        private readonly couponRepo: CouponRepo,
        private readonly productRepo: ProductRepo,


    ) { }

    // 1-----------------------Api :  create Order
    async createOrder(body: CreateOrderDto, user: HUserDocument) {

        const { phone, address, paymentMethod, couponCode } = body
// check coupon
        let coupon: any
        if (couponCode) {
            coupon = await this.couponRepo.findOne({
                filter: { 
                    code: couponCode, 
                    usedBy: { $ne: user._id } },
            })

            if (!coupon) {
                throw new ConflictException('Coupon not found')
            }
        }

// check cart
          const cart = await this.cartRepo.findOne({ filter: { createdBy: user._id } })
            if (!cart || !cart.products.length) {
                throw new ConflictException('Cart not found')
            }

// check product stock
            for (const product of cart.products) {
                const productData = await this.productRepo.findOne({
                    filter: {
                        _id: product.productId,
                        stock: { $gte: product.quantity }
                    }
                })
                if (!productData) {
                    throw new ConflictException('Product not found')
                }
            }

// create order & Apply coupon in the order
            const order = await this.orderRepo.create({
                userID: user._id,
                cart: cart._id,
                coupon: couponCode ? coupon._id : undefined,
                totalPrice: couponCode ? cart.subTotal - (cart.subTotal * coupon.amount / 100) : cart.subTotal,
                address,
                phone,
                paymentMethod,
                status: paymentMethod == paymentMethodEnum.cash ? orderStatusEnum.placed : orderStatusEnum.pending,
            })

// update product stock in product model
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
                })
  
       
            }
// update coupon usedBy in coupon model
            if(coupon){
                await this.couponRepo.findOneAndUpdate({
                    filter: { _id: coupon._id },
                    update: {
                        $push: { usedBy: user._id }
                    },
                    options: {
                        new: true
                    }
                })  
            }
// update status in cart model based payment method then remove it if payment method is cash
            if(paymentMethod == paymentMethodEnum.cash){
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
                })
            }

    
                 return order



    }


}

