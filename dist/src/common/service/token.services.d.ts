import { JwtPayload } from "jsonwebtoken";
import { TokenTypeEnum } from "../enums";
import { JwtService, JwtSignOptions, JwtVerifyOptions } from "@nestjs/jwt";
import { UserRepo } from "src/DB";
export declare class TokenService {
    private readonly jwtService;
    private readonly UserRepo;
    constructor(jwtService: JwtService, UserRepo: UserRepo);
    GenerateToken: ({ payload, options }: {
        payload: Object;
        options?: JwtSignOptions;
    }) => Promise<string>;
    VerifyToken: ({ token, options }: {
        token: string;
        options?: JwtVerifyOptions;
    }) => Promise<JwtPayload>;
    GenerateSignature: (prefix: string, tokenType?: TokenTypeEnum) => Promise<string | null | undefined>;
    DecodeTokenAndFetchUser: (token: string, signature: string) => Promise<{
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
        decoded: JwtPayload;
    }>;
}
