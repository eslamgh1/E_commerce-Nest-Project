import { HydratedDocument, Types } from "mongoose";
import { userGender, userProvider, userRole } from "src/common/enums";
import type { HOtpDocument } from "./otp.models";
export declare class User {
    fName: string;
    lName: string;
    userName: string;
    email: string;
    password: string;
    age: number;
    confirmed: boolean;
    role: userRole;
    gender: userGender;
    provider: userProvider;
    changecredentailAt: Date;
    otp?: HOtpDocument;
    wishList?: Types.ObjectId[];
}
export type HUserDocument = HydratedDocument<User>;
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User, any, {}> & User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: import("@nestjs/common").DynamicModule;
