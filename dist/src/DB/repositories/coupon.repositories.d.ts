import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HCouponDocument } from "../models";
export declare class CouponRepo extends DBRepo<HCouponDocument> {
    protected readonly model: Model<HCouponDocument>;
    constructor(model: Model<HCouponDocument>);
}
