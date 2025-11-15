import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto, } from './cart.dto';
import  {  CartRepo, ProductRepo } from 'src/DB';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';



@Injectable()
export class CartService {
    // inject brand repo
    constructor(
        private readonly cartRepo: CartRepo,
        private readonly ProductRepo: ProductRepo,

    ) { }

    // 1-----------------------Api : create Cart service
    async createCart(
        body: CreateCartDto,
        user: HUserDocument,
    ) {

        const {productId, quantity} = body

        const product = await this.ProductRepo.findOne({
            filter:{_id:productId ,
                stock:{$gte:quantity}
            }})

        if (!product) {
            throw new BadRequestException('product not found')
        }

        const cart = await this.cartRepo.findOne({
            filter:{
                createdBy: user._id,
            }
        })

        // if cart not exist create new cart
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
            })

            return newCart
        }

        // if cart exists update cart and product exists

        const productCart = cart.products.find((product) => product.productId.toString() === productId.toString())

        if (productCart) {
            throw new BadRequestException('product already exists in cart')
        }

        cart.products.push({
            productId,
            quantity,
            finalPrice: product.price
        })
        
        // save method is used to update as per the pre hook

        await cart.save()
        return cart

    }
    // 1-----------------------Api : create Cart service
    async removeProductFromCart(
        id: Types.ObjectId,
        user: HUserDocument,
    ) {


        const product = await this.ProductRepo.findOne({
            filter:{_id:id  

            }})

        if (!product) {
            throw new BadRequestException('product not found')
        }

        const cart = await this.cartRepo.findOne({
            filter:{
                createdBy: user._id,
            }
        })

        if (!cart) {
            throw new BadRequestException('cart not found')
        }


        
        // save method is used to update as per the pre hook

        await cart.save()
        return cart

    }




}


