import { HydratedDocument, Types } from "mongoose";
export declare class Coupon {
    code: string;
    amount: number;
    fromDate: Date;
    toDate: Date;
    createdBy: Types.ObjectId[];
    usedBy: Types.ObjectId[];
    deletedAt: Date;
    restoredAt: Date;
}
export type HCouponDocument = HydratedDocument<Coupon>;
export declare const CouponSchema: import("mongoose").Schema<Coupon, import("mongoose").Model<Coupon, any, any, any, import("mongoose").Document<unknown, any, Coupon, any, {}> & Coupon & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Coupon, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Coupon>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Coupon> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CouponModel: import("@nestjs/common").DynamicModule;
