"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const DB_1 = require("../../DB");
const token_services_1 = require("../../common/service/token.services");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../../common");
const order_model_1 = require("../../DB/models/order.model");
const cart_model_1 = require("../../DB/models/cart.model");
const coupon_service_1 = require("../coupon/coupon.service");
const stripe_services_1 = require("../../common/service/stripe.services");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [DB_1.UserModel, order_model_1.OrderModel, cart_model_1.CartModel, DB_1.CouponModel, DB_1.ProductModel],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, token_services_1.TokenService, jwt_1.JwtService, DB_1.UserRepo, common_2.S3Service, DB_1.OrderRepo, DB_1.CartRepo, DB_1.CouponRepo, DB_1.ProductRepo, coupon_service_1.CouponService, stripe_services_1.StripeServices]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map