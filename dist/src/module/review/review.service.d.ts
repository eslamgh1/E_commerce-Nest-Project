import { CreateReviewDto, UpdateReviewDto } from './review.dto';
import { CartRepo, HUserDocument, OrderRepo, ReviewRepo } from 'src/DB';
import { S3Service } from 'src/common';
import { Types } from 'mongoose';
export declare class ReviewService {
    private readonly ReviewRepo;
    private readonly S3Service;
    private readonly cartRepo;
    private readonly orderRepo;
    constructor(ReviewRepo: ReviewRepo, S3Service: S3Service, cartRepo: CartRepo, orderRepo: OrderRepo);
    createReview(ReviewDto: CreateReviewDto, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateReview(updateReviewDto: UpdateReviewDto, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    deleteReview(reviewId: Types.ObjectId, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Review, {}, {}> & import("src/DB").Review & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
}
