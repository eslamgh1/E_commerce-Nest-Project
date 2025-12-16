import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HProductDocument } from "../models";
export declare class ProductRepo extends DBRepo<HProductDocument> {
    protected readonly model: Model<HProductDocument>;
    constructor(model: Model<HProductDocument>);
}
