import { Types } from "mongoose";
export declare class updateQuantityDto {
    quantity: number;
}
export declare class CreateCartDto extends updateQuantityDto {
    productId: Types.ObjectId;
}
export declare class paramDto {
    id: Types.ObjectId;
}
