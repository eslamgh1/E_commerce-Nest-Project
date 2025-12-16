import { Types } from "mongoose";
import { paymentMethodEnum } from "src/common";
export declare class CreateOrderDto {
    phone: string;
    address: string;
    paymentMethod: paymentMethodEnum;
    couponCode?: string;
}
export declare class idDto {
    id: Types.ObjectId;
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
