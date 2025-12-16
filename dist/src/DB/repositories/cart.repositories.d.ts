import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HCartDocument } from "../models";
export declare class CartRepo extends DBRepo<HCartDocument> {
    protected readonly model: Model<HCartDocument>;
    constructor(model: Model<HCartDocument>);
}
