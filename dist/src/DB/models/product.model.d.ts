import { HydratedDocument, Types } from "mongoose";
export declare class Product {
    name: string;
    slug: string;
    description: string;
    mainImage: string;
    subImages: string[];
    price: number;
    discount: number;
    brand: Types.ObjectId;
    category: Types.ObjectId;
    quantity: number;
    stock: number;
    rateNum: number;
    rateAvg: number;
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    deletedAt: Date;
    restoredAt: Date;
}
export type HProductDocument = HydratedDocument<Product>;
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product, any, {}> & Product & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ProductModel: import("@nestjs/common").DynamicModule;
