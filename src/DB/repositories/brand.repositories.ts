import { DBRepo } from "./db.repositories";
import { HUserDocument, User } from "../models/user.models";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Brand, BrandDocument } from "../models/brand.model";


@Injectable()
export class BrandRepo extends DBRepo<BrandDocument> {
   constructor(@InjectModel(Brand.name) protected override readonly model: Model<BrandDocument>){
        super(model)
    }


}
