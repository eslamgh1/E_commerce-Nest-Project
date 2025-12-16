import { HydratedDocument, Types } from "mongoose";
export declare class CartProduct {
    productId: Types.ObjectId;
    quantity: number;
    finalPrice: number;
}
export declare class Cart {
    products: CartProduct[];
    createdBy: Types.ObjectId;
    subTotal: number;
    deletedAt: Date;
    restoredAt: Date;
}
export type HCartDocument = HydratedDocument<Cart>;
export declare const cartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, import("mongoose").Document<unknown, any, Cart, any, {}> & Cart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Cart>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Cart> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CartModel: import("@nestjs/common").DynamicModule;
