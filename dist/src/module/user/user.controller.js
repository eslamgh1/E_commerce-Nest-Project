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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("./user.service");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const platform_express_1 = require("@nestjs/platform-express");
const Interceptors_1 = require("../../common/Interceptors");
const utils_1 = require("../../common/utils");
const common_2 = require("../../common");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(body) {
        return await this.userService.signUp(body);
    }
    async resendOtp(body) {
        return await this.userService.ResendOtp(body);
    }
    async confirmEmail(body) {
        return await this.userService.confirmEmail(body);
    }
    async login(body) {
        return await this.userService.login(body);
    }
    profile(user) {
        return { message: "profile", user: user };
    }
    async uploadFile(file, user) {
        const url = await this.userService.uploadFile(file, user);
        return { message: "file uploaded successfully", url };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)("resendotp"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ResendOtpDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resendOtp", null);
__decorate([
    (0, common_1.Patch)("confirmemail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.confirmEmailDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "confirmEmail", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.loginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.UseInterceptors)(Interceptors_1.LoggingInterceptor),
    (0, auth_decorators_1.Auth)(),
    (0, common_1.Get)("profile"),
    __param(0, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "profile", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("attachment", (0, utils_1.multerCloud)({ fileType: utils_1.fileValidation.image }))),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadFile", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map