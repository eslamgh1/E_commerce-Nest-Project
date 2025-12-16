import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HReviewDocument } from "../models/review.model";
export declare class ReviewRepo extends DBRepo<HReviewDocument> {
    protected readonly model: Model<HReviewDocument>;
    constructor(model: Model<HReviewDocument>);
}
