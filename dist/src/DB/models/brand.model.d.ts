import { HydratedDocument, Types } from "mongoose";
export declare class Brand {
    name: string;
    slogan: string;
    slug: string;
    image: string;
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    deletedAt: Date;
    restoredAt: Date;
}
export type HBrandDocument = HydratedDocument<Brand>;
export declare const BrandSchema: import("mongoose").Schema<Brand, import("mongoose").Model<Brand, any, any, any, import("mongoose").Document<unknown, any, Brand, any, {}> & Brand & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Brand, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Brand>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Brand> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const BrandModel: import("@nestjs/common").DynamicModule;
