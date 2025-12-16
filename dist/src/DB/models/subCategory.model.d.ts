import { HydratedDocument, Types } from "mongoose";
export declare class SubCategory {
    name: string;
    slogan: string;
    slug: string;
    image: string;
    assetFolderId: string;
    brands: Types.ObjectId[];
    categories: Types.ObjectId[];
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    deletedAt: Date;
    restoredAt: Date;
}
export type HSubCategoryDocument = HydratedDocument<SubCategory>;
export declare const SubCategorySchema: import("mongoose").Schema<SubCategory, import("mongoose").Model<SubCategory, any, any, any, import("mongoose").Document<unknown, any, SubCategory, any, {}> & SubCategory & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SubCategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SubCategory>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SubCategory> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const SubCategoryModel: import("@nestjs/common").DynamicModule;
