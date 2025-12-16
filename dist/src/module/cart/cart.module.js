"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const cart_controller_1 = require("./cart.controller");
const DB_1 = require("../../DB");
const token_services_1 = require("../../common/service/token.services");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../../common");
const product_model_1 = require("../../DB/models/product.model");
const cart_service_1 = require("./cart.service");
const socket_gateway_1 = require("../gateway/socket.gateway");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [DB_1.UserModel, product_model_1.ProductModel, DB_1.CartModel],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService, token_services_1.TokenService, jwt_1.JwtService, DB_1.UserRepo, common_2.S3Service, DB_1.CartRepo, DB_1.ProductRepo, socket_gateway_1.SocketGateway]
    })
], CartModule);
//# sourceMappingURL=cart.module.js.map