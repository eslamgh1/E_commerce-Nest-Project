import { DBRepo } from "./db.repositories";
import { Model } from "mongoose";
import { HOtpDocument } from "../models";
export declare class OtpRepo extends DBRepo<HOtpDocument> {
    protected readonly model: Model<HOtpDocument>;
    constructor(model: Model<HOtpDocument>);
}
