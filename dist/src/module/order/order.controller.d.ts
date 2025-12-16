import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
import { CouponService } from '../coupon/coupon.service';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.dto';
import { paramDto } from '../product/product.dto';
export declare class OrderController {
    private readonly couponService;
    private readonly orderService;
    constructor(couponService: CouponService, orderService: OrderService);
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
    paymentWithStripe(params: paramDto, user: HUserDocument): Promise<{
        url: string | null;
    }>;
    webhook(body: any): Promise<void>;
    refundedOrder(params: paramDto, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../DB/models/order.model").Order, {}, {}> & import("../../DB/models/order.model").Order & {
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
