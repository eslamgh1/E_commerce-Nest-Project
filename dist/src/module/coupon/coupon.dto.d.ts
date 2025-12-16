import { Types } from "mongoose";
export declare class CreateCouponDto {
    code: string;
    amount: number;
    fromDate: Date;
    toDate: Date;
}
export declare class idDto {
    id: Types.ObjectId;
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
