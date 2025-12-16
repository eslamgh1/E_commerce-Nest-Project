"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const common_2 = require("../../common");
let ReviewService = class ReviewService {
    ReviewRepo;
    S3Service;
    cartRepo;
    orderRepo;
    constructor(ReviewRepo, S3Service, cartRepo, orderRepo) {
        this.ReviewRepo = ReviewRepo;
        this.S3Service = S3Service;
        this.cartRepo = cartRepo;
        this.orderRepo = orderRepo;
    }
    async createReview(ReviewDto, user) {
        const { rating, title, cstReview, orderId, cartId } = ReviewDto;
        const order = await this.orderRepo.findOne({
            filter: {
                _id: orderId,
                userID: user._id,
            },
            options: {
                populate: [
                    {
                        path: "cart",
                        populate: [{
                                path: "products.productId"
                            }]
                    }
                ]
            }
        });
        console.log({ order });
        if (!order) {
            throw new common_1.ConflictException('order not found');
        }
        const review = await this.ReviewRepo.create({
            rating,
            title,
            cstReview,
            orderId,
            cartId,
            user: user._id
        });
        return review;
    }
    async updateReview(updateReviewDto, user) {
        const { rating, title, cstReview, reviewId } = updateReviewDto;
        const existingReview = await this.ReviewRepo.findOne({
            filter: {
                _id: reviewId,
                user: user._id
            }
        });
        if (!existingReview) {
            throw new common_1.NotFoundException(`Order with ID ${reviewId} not found or not eligible for review.`);
        }
        const updatedReview = await this.ReviewRepo.findOneAndUpdate({
            filter: {
                _id: reviewId,
                user: user._id
            },
            update: { rating, title, cstReview },
            options: { new: true }
        });
        return updatedReview;
    }
    async deleteReview(reviewId, user) {
        const existingReview = await this.ReviewRepo.findOne({
            filter: {
                _id: reviewId,
                user: user._id
            }
        });
        if (!existingReview) {
            throw new common_1.NotFoundException(`Review with ID ${reviewId} not found or not eligible for review.`);
        }
        const deletedReview = await this.ReviewRepo.findOneAndDelete({
            filter: {
                _id: reviewId,
                user: user._id
            }
        });
        return deletedReview;
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.ReviewRepo,
        common_2.S3Service,
        DB_1.CartRepo,
        DB_1.OrderRepo])
], ReviewService);
//# sourceMappingURL=review.service.js.map