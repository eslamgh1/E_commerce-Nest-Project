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
exports.AuthenticationMiddleware = exports.tokenType = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
const token_services_1 = require("../common/service/token.services");
const tokenType = (typeToken = common_2.TokenTypeEnum.access) => {
    return (req, res, next) => {
        req.typeToken = typeToken;
        next();
    };
};
exports.tokenType = tokenType;
let AuthenticationMiddleware = class AuthenticationMiddleware {
    tokenService;
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    async use(req, res, next) {
    }
};
exports.AuthenticationMiddleware = AuthenticationMiddleware;
exports.AuthenticationMiddleware = AuthenticationMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_services_1.TokenService])
], AuthenticationMiddleware);
//# sourceMappingURL=authentication.middleware.js.map