import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { otpTypeEnum } from "src/common";

@Schema({timestamps:true})
export class Otp{
    @Prop({required:true , type:String , trim:true})
    code:string

    @Prop({required:true , type:Types.ObjectId , ref:"User"})
    createdBy:Types.ObjectId

    @Prop({required:true , type:String , enum:otpTypeEnum})
    type:otpTypeEnum    

    @Prop({required:true , type:Date})
    expiresAt:Date
   
}

export type HOtpDocument = HydratedDocument<Otp>;
export const OtpSchema = SchemaFactory.createForClass(Otp);

OtpSchema.index({expiresAt:1},{expireAfterSeconds:0})

export const OtpModel = MongooseModule.forFeature([{ name: Otp.name, schema: OtpSchema }])