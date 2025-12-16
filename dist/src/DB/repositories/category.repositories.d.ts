import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HCategoryDocument } from "../models";
export declare class CategoryRepo extends DBRepo<HCategoryDocument> {
    protected readonly model: Model<HCategoryDocument>;
    constructor(model: Model<HCategoryDocument>);
}
