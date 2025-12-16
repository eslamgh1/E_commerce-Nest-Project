import { HUserDocument, ProductRepo } from 'src/DB';
import { OrderRepo } from 'src/DB/repositories/order.repositories';
import { CartRepo } from 'src/DB/repositories/cart.repositories';
import { CouponRepo } from 'src/DB/repositories/coupon.repositories';
import { CreateOrderDto } from './order.dto';
import { Types } from 'mongoose';
import { StripeServices } from 'src/common/service/stripe.services';
export declare class OrderService {
    private readonly orderRepo;
    private readonly cartRepo;
    private readonly couponRepo;
    private readonly productRepo;
    private readonly stripService;
    constructor(orderRepo: OrderRepo, cartRepo: CartRepo, couponRepo: CouponRepo, productRepo: ProductRepo, stripService: StripeServices);
    createOrder(body: CreateOrderDto, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    paymentWithStrip(id: Types.ObjectId, user: HUserDocument): Promise<{
        url: string | null;
    }>;
    webhook(body: any): Promise<{
        order: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
    refundedOrder(id: Types.ObjectId, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
}
