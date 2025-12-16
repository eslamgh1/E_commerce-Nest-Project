import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HSubCategoryDocument } from "../models";
export declare class SubCategoryRepo extends DBRepo<HSubCategoryDocument> {
    protected readonly model: Model<HSubCategoryDocument>;
    constructor(model: Model<HSubCategoryDocument>);
}
