import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HBrandDocument } from "../models";
export declare class BrandRepo extends DBRepo<HBrandDocument> {
    protected readonly model: Model<HBrandDocument>;
    constructor(model: Model<HBrandDocument>);
}
