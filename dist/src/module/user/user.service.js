"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const enums_1 = require("../../common/enums");
const common_2 = require("../../common");
const hash_1 = require("../../common/security/hash");
const token_services_1 = require("../../common/service/token.services");
const s3_service_1 = require("../../common/service/s3.service");
let UserService = class UserService {
    userRepo;
    otpRepo;
    TokenService;
    s3Service;
    constructor(userRepo, otpRepo, TokenService, s3Service) {
        this.userRepo = userRepo;
        this.otpRepo = otpRepo;
        this.TokenService = TokenService;
        this.s3Service = s3Service;
    }
    async sendOtp(userId) {
        const otp = (0, common_2.generateOTP)();
        await this.otpRepo.create({
            code: otp.toString(),
            createdBy: userId,
            type: enums_1.otpTypeEnum.CONFIRM_EMAIL,
            expiresAt: new Date(Date.now() + 60 * 1000)
        });
    }
    async signUp(body) {
        const { fName, lName, email, password, age, gender } = body;
        const userExist = await this.userRepo.findOne({ filter: { email } });
        if (userExist) {
            throw new common_1.BadRequestException("User already exists");
        }
        const user = await this.userRepo.create({
            email,
            password,
            age,
            fName,
            lName,
            gender: gender ? gender : enums_1.userGender.MALE
        });
        if (!user) {
            throw new common_1.BadRequestException("User not created");
        }
        await this.sendOtp(user._id);
        return user;
    }
    async ResendOtp(body) {
        const { email } = body;
        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: false }
            },
            options: {
                populate: {
                    path: "otp",
                }
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException("User is not found");
        }
        if (user.otp.length > 0) {
            throw new common_1.BadRequestException("Otp already sent");
        }
        await this.sendOtp(user._id);
        return { message: "Otp sent successfully", user };
    }
    async confirmEmail(body) {
        const { email, code } = body;
        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: false }
            },
            options: {
                populate: {
                    path: "otp",
                }
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException("User is not found");
        }
        if (!(0, hash_1.Compare)({ plainText: code, cipherText: user.otp[0].code })) {
            throw new common_1.BadRequestException("Invalid code");
        }
        user.confirmed = true;
        await user.save();
        await this.otpRepo.deleteOne({ filter: { createdBy: user._id } });
        return { message: "Email is confirmed successfully", user };
    }
    async login(body) {
        const { email, password } = body;
        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: true }
            },
            options: {
                populate: {
                    path: "otp",
                }
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException("User is not found");
        }
        if (!await (0, hash_1.Compare)({ plainText: password, cipherText: user.password })) {
            throw new common_1.BadRequestException("Invalid code");
        }
        const accessToken = await this.TokenService.GenerateToken({ payload: { email, id: user._id },
            options: {
                secret: user.role === enums_1.userRole.USER ? process.env.SECRET_USER_TOKEN : process.env.SECRET_ADMIN_TOKEN,
                expiresIn: "1y"
            }
        });
        const refreshToken = await this.TokenService.GenerateToken({ payload: { email, id: user._id },
            options: {
                secret: user.role === enums_1.userRole.USER ? process.env.REFRESH_SECRET_USER_TOKEN : process.env.REFRESH_SECRET_ADMIN_TOKEN,
                expiresIn: "1y"
            } });
        return { message: "user logged in successfully", accessToken, refreshToken };
    }
    async uploadFile(file, user) {
        return this.s3Service.uploadFile({
            file,
            path: `users/${user._id}`,
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.UserRepo,
        DB_1.OtpRepo,
        token_services_1.TokenService,
        s3_service_1.S3Service])
], UserService);
//# sourceMappingURL=user.service.js.map