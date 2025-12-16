import { HydratedDocument, Types } from "mongoose";
export declare class Review {
    rating: number;
    title: string;
    cstReview: string;
    orderId: Types.ObjectId;
    cartId: Types.ObjectId;
    user: Types.ObjectId;
    updatedBy: Types.ObjectId;
    deletedAt: Date;
    restoredAt: Date;
}
export type HReviewDocument = HydratedDocument<Review>;
export declare const ReviewSchema: import("mongoose").Schema<Review, import("mongoose").Model<Review, any, any, any, import("mongoose").Document<unknown, any, Review, any, {}> & Review & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Review, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Review>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Review> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ReviewModel: import("@nestjs/common").DynamicModule;
