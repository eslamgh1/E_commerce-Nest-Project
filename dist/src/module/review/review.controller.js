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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const review_dto_1 = require("./review.dto");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const review_service_1 = require("./review.service");
let ReviewController = class ReviewController {
    ReviewService;
    constructor(ReviewService) {
        this.ReviewService = ReviewService;
    }
    async createReview(ReviewDto, user) {
        const Review = await this.ReviewService.createReview(ReviewDto, user);
        return { message: 'Review created successfully', Review };
    }
    async updateReview(ReviewDto, user) {
        const Review = await this.ReviewService.updateReview(ReviewDto, user);
        return { message: 'Review updated successfully', Review };
    }
    async deleteReview(ReviewDto, user) {
        const Review = await this.ReviewService.deleteReview(ReviewDto.id, user);
        return { message: 'Review deleted successfully', Review };
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.CreateReviewDto, Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/update"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.UpdateReviewDto, Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteReview", null);
exports.ReviewController = ReviewController = __decorate([
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map