import { confirmEmailDto, loginDto, ResendOtpDto, UserDto } from '../dto/user.dto';
import { HUserDocument, OtpRepo, UserRepo } from 'src/DB';
import { Types } from 'mongoose';
import { TokenService } from 'src/common/service/token.services';
import { S3Service } from 'src/common/service/s3.service';
export declare class UserService {
    private readonly userRepo;
    private readonly otpRepo;
    private TokenService;
    private readonly s3Service;
    constructor(userRepo: UserRepo, otpRepo: OtpRepo, TokenService: TokenService, s3Service: S3Service);
    private sendOtp;
    signUp(body: UserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    ResendOtp(body: ResendOtpDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    confirmEmail(body: confirmEmailDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    login(body: loginDto): Promise<{
        message: string;
        accessToken: string;
        refreshToken: string;
    }>;
    uploadFile(file: Express.Multer.File, user: HUserDocument): Promise<string>;
}
