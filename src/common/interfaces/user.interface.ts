import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { HUserDocument } from "src/DB";

export interface UserWithRequest extends Request {
    user: HUserDocument;
    decoded: JwtPayload;
}