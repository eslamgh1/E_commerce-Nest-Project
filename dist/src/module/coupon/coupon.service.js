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
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
let CouponService = class CouponService {
    CouponRepo;
    constructor(CouponRepo) {
        this.CouponRepo = CouponRepo;
    }
    async createCoupon(body, user) {
        const { code, amount, fromDate, toDate } = body;
        const couponExist = await this.CouponRepo.findOne({
            filter: { code: code.toLowerCase() }
        });
        if (couponExist) {
            throw new common_1.ConflictException('Coupon already exist');
        }
        const coupon = await this.CouponRepo.create({
            code,
            amount,
            fromDate,
            toDate,
            createdBy: [user._id],
            usedBy: [],
        });
        if (!coupon) {
            throw new common_1.InternalServerErrorException('Faild to create Coupon');
        }
        return coupon;
    }
};
exports.CouponService = CouponService;
exports.CouponService = CouponService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.CouponRepo])
], CouponService);
//# sourceMappingURL=coupon.service.js.map