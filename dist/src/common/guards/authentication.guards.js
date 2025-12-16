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
exports.AuthunticationGuard = void 0;
const common_1 = require("@nestjs/common");
const token_services_1 = require("../service/token.services");
const core_1 = require("@nestjs/core");
const decorators_1 = require("../decorators");
let AuthunticationGuard = class AuthunticationGuard {
    tokenService;
    reflector;
    constructor(tokenService, reflector) {
        this.tokenService = tokenService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const typeToken = this.reflector.get(decorators_1.tokenName, context.getHandler());
        let req;
        let authorization = "";
        if (context.getType() === 'http') {
            req = context.switchToHttp().getRequest();
            authorization = req.headers?.authorization;
        }
        else if (context.getType() === 'ws') {
            req = context.switchToWs().getClient();
            authorization = req.handshake.headers.authorization;
        }
        else if (context.getType() === 'rpc') {
        }
        try {
            if (!authorization) {
                throw new common_1.BadRequestException("Provide us with token");
            }
            const [prefix, token] = authorization?.split(" ") || [];
            if (!prefix || !token) {
                throw new common_1.BadRequestException("Provide us with valid token/prefix");
            }
            const signature = await this.tokenService.GenerateSignature(prefix, typeToken);
            if (!signature) {
                throw new common_1.BadRequestException("Invalid Signature");
            }
            const { user, decoded } = await this.tokenService.DecodeTokenAndFetchUser(token, signature);
            if (!decoded) {
                throw new common_1.BadRequestException("Invalid Token decoded");
            }
            req.user = user;
            req.decoded = decoded;
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException("Invalid Token");
        }
        return true;
    }
};
exports.AuthunticationGuard = AuthunticationGuard;
exports.AuthunticationGuard = AuthunticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_services_1.TokenService,
        core_1.Reflector])
], AuthunticationGuard);
//# sourceMappingURL=authentication.guards.js.map