import { HydratedDocument, Types } from "mongoose";
import { otpTypeEnum } from "src/common";
export declare class Otp {
    code: string;
    createdBy: Types.ObjectId;
    type: otpTypeEnum;
    expiresAt: Date;
}
export type HOtpDocument = HydratedDocument<Otp>;
export declare const OtpSchema: import("mongoose").Schema<Otp, import("mongoose").Model<Otp, any, any, any, import("mongoose").Document<unknown, any, Otp, any, {}> & Otp & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Otp, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Otp>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Otp> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const OtpModel: import("@nestjs/common").DynamicModule;
