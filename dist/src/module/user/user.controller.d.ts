import { confirmEmailDto, loginDto, ResendOtpDto, UserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import type { HUserDocument } from 'src/DB';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(body: UserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    resendOtp(body: ResendOtpDto): Promise<{
        message: string;
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
    }>;
    confirmEmail(body: confirmEmailDto): Promise<{
        message: string;
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
    }>;
    login(body: loginDto): Promise<{
        message: string;
        accessToken: string;
        refreshToken: string;
    }>;
    profile(user: HUserDocument): {
        message: string;
        user: import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    };
    uploadFile(file: Express.Multer.File, user: HUserDocument): Promise<{
        message: string;
        url: string;
    }>;
}
