import type { HUserDocument } from 'src/DB';
import { CartService } from './cart.service';
import { CreateCartDto, paramDto, updateQuantityDto } from './cart.dto';
export declare class CartController {
    private readonly CartService;
    constructor(CartService: CartService);
    createCart(body: CreateCartDto, user: HUserDocument): Promise<{
        message: string;
        cart: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
        user: import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        body: CreateCartDto;
    }>;
    removeProducFromCartCst(param: paramDto, user: HUserDocument): Promise<{
        message: string;
        cart: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    updateQuantityCart(param: paramDto, body: updateQuantityDto, user: HUserDocument): Promise<{
        message: string;
        cart: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
