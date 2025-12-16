import { CreateCouponDto } from './coupon.dto';
import { CouponRepo, HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
export declare class CouponService {
    private readonly CouponRepo;
    constructor(CouponRepo: CouponRepo);
    createCoupon(body: CreateCouponDto, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Coupon, {}, {}> & import("src/DB").Coupon & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Coupon, {}, {}> & import("src/DB").Coupon & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
}
