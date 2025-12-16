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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const jwt_1 = require("@nestjs/jwt");
const DB_1 = require("../../DB");
let TokenService = class TokenService {
    jwtService;
    UserRepo;
    constructor(jwtService, UserRepo) {
        this.jwtService = jwtService;
        this.UserRepo = UserRepo;
    }
    GenerateToken = async ({ payload, options }) => this.jwtService.signAsync(payload, options);
    VerifyToken = async ({ token, options }) => {
        return this.jwtService.verifyAsync(token, options);
    };
    GenerateSignature = async (prefix, tokenType = enums_1.TokenTypeEnum.access) => {
        if (tokenType === enums_1.TokenTypeEnum.access) {
            if (prefix === process.env.BEARER_USER) {
                return process.env.SECRET_USER_TOKEN;
            }
            else if (prefix === process.env.BEARER_ADMIN) {
                return process.env.SECRET_ADMIN_TOKEN;
            }
            else {
                return null;
            }
        }
        if (tokenType === enums_1.TokenTypeEnum.refresh) {
            if (prefix === process.env.BEARER_USER) {
                return process.env.SECRET_REFRESH_USER_TOKEN;
            }
            else if (prefix === process.env.BEARER_ADMIN) {
                return process.env.SECRET_REFRESH_ADMIN_TOKEN;
            }
            else {
                return null;
            }
        }
        return null;
    };
    DecodeTokenAndFetchUser = async (token, signature) => {
        const decoded = await this.VerifyToken({ token, options: { secret: signature } });
        if (!decoded.email) {
            throw new common_1.BadRequestException("Invalid Token");
        }
        const user = await this.UserRepo.findOne({ filter: { email: decoded.email } });
        if (!user) {
            throw new common_1.BadRequestException("Email does not exist");
        }
        if (!user?.confirmed) {
            throw new common_1.BadRequestException("Please confirm the email or you are freezed");
        }
        return { user, decoded };
    };
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        DB_1.UserRepo])
], TokenService);
//# sourceMappingURL=token.services.js.map