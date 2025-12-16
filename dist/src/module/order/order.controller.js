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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const coupon_service_1 = require("../coupon/coupon.service");
const order_service_1 = require("./order.service");
const order_dto_1 = require("./order.dto");
const product_dto_1 = require("../product/product.dto");
let OrderController = class OrderController {
    couponService;
    orderService;
    constructor(couponService, orderService) {
        this.couponService = couponService;
        this.orderService = orderService;
    }
    async createOrder(body, user) {
        return await this.orderService.createOrder(body, user);
    }
    async paymentWithStripe(params, user) {
        return await this.orderService.paymentWithStrip(params.id, user);
    }
    async webhook(body) {
        await this.orderService.webhook(body);
    }
    async refundedOrder(params, user) {
        return await this.orderService.refundedOrder(params.id, user);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER, common_2.userRole.ADMIN],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER, common_2.userRole.ADMIN],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Post)("stripe/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.paramDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "paymentWithStripe", null);
__decorate([
    (0, common_1.Post)("/webhook"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "webhook", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.ADMIN, common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("refund/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.paramDto, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "refundedOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [coupon_service_1.CouponService,
        order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map