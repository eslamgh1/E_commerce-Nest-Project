import { DBRepo } from "./db.repositories";
import { HUserDocument } from "../models/user.models";
import { Model } from "mongoose";
export declare class UserRepo extends DBRepo<HUserDocument> {
    protected readonly model: Model<HUserDocument>;
    constructor(model: Model<HUserDocument>);
}
