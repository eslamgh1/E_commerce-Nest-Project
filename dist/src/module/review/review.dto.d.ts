import { Types } from "mongoose";
export declare class CreateReviewDto {
    rating: number;
    title: string;
    cstReview: string;
    orderId: Types.ObjectId;
    cartId: Types.ObjectId;
    user: Types.ObjectId;
}
export declare class UpdateReviewDto {
    rating: number;
    title: string;
    cstReview: string;
    orderId: Types.ObjectId;
    reviewId: Types.ObjectId;
    cartId: Types.ObjectId;
    user: Types.ObjectId;
}
export declare class idDto {
    id: Types.ObjectId;
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
