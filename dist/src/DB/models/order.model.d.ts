import { HydratedDocument, Types } from "mongoose";
import { orderStatusEnum, paymentMethodEnum } from "src/common/enums/order.enums";
export declare class Order {
    userID: Types.ObjectId;
    cart: Types.ObjectId;
    coupon: Types.ObjectId;
    totalPrice: number;
    address: string;
    phone: string;
    paymentMethod: paymentMethodEnum;
    status: orderStatusEnum;
    arriveAt: Date;
    paymentIntent: String;
    orderChanges: Object;
}
export type HOrderDocument = HydratedDocument<Order>;
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, import("mongoose").Document<unknown, any, Order, any, {}> & Order & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Order>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const OrderModel: import("@nestjs/common").DynamicModule;
