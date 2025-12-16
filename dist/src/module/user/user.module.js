"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const models_1 = require("../../DB/models");
const DB_1 = require("../../DB");
const models_2 = require("../../DB/models");
const jwt_1 = require("@nestjs/jwt");
const token_services_1 = require("../../common/service/token.services");
const s3_service_1 = require("../../common/service/s3.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [models_1.UserModel, models_2.OtpModel,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, DB_1.UserRepo, DB_1.OtpRepo, jwt_1.JwtService, token_services_1.TokenService, s3_service_1.S3Service]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map