import { CreateCartDto, updateQuantityDto } from './cart.dto';
import { CartRepo, ProductRepo } from 'src/DB';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
import { SocketGateway } from '../gateway/socket.gateway';
export declare class CartService {
    private readonly cartRepo;
    private readonly ProductRepo;
    private readonly SocketGateway;
    constructor(cartRepo: CartRepo, ProductRepo: ProductRepo, SocketGateway: SocketGateway);
    createCart(body: CreateCartDto, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    removeProductFromCart(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateQuantityFromCart(id: Types.ObjectId, user: HUserDocument, body: updateQuantityDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Cart, {}, {}> & import("src/DB").Cart & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
}
