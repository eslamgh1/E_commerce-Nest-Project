import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HOrderDocument } from "../models/order.model";
export declare class OrderRepo extends DBRepo<HOrderDocument> {
    protected readonly model: Model<HOrderDocument>;
    constructor(model: Model<HOrderDocument>);
}
