import { CreateReviewDto, idDto, UpdateReviewDto } from './review.dto';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly ReviewService;
    constructor(ReviewService: ReviewService);
    createReview(ReviewDto: CreateReviewDto, user: HUserDocument): Promise<{
        message: string;
        Review: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    updateReview(ReviewDto: UpdateReviewDto, user: HUserDocument): Promise<{
        message: string;
        Review: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
    deleteReview(ReviewDto: idDto, user: HUserDocument): Promise<{
        message: string;
        Review: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
}
