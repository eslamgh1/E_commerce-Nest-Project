import { HydratedDocument, Types } from "mongoose";
export declare class Category {
    name: string;
    slogan: string;
    slug: string;
    image: string;
    assetFolderId: string;
    brands: Types.ObjectId[];
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    deletedAt: Date;
    restoredAt: Date;
}
export type HCategoryDocument = HydratedDocument<Category>;
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, import("mongoose").Document<unknown, any, Category, any, {}> & Category & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Category>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Category> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CategoryModel: import("@nestjs/common").DynamicModule;
