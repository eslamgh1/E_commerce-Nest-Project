import { CouponService } from './coupon.service';
import { CreateCouponDto } from './coupon.dto';
import type { HUserDocument } from 'src/DB';
export declare class couponController {
    private readonly couponService;
    constructor(couponService: CouponService);
    createCoupon(couponDto: CreateCouponDto, user: HUserDocument): Promise<{
        message: string;
        coupon: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Coupon, {}, {}> & import("src/DB").Coupon & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Coupon, {}, {}> & import("src/DB").Coupon & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
