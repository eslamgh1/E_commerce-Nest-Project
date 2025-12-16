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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const cart_service_1 = require("./cart.service");
const cart_dto_1 = require("./cart.dto");
let CartController = class CartController {
    CartService;
    constructor(CartService) {
        this.CartService = CartService;
    }
    async createCart(body, user) {
        const cart = await this.CartService.createCart(body, user);
        return { message: 'cart is created successfully', cart, user, body };
    }
    async removeProducFromCartCst(param, user) {
        const cart = await this.CartService.removeProductFromCart(param.id, user);
        return { message: 'product / cart is removed successfully', cart };
    }
    async updateQuantityCart(param, body, user) {
        const cart = await this.CartService.updateQuantityFromCart(param.id, user, body);
        return { message: 'Cart is updated successfully', cart };
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)(),
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER, common_2.userRole.ADMIN],
        typeToken: common_2.TokenTypeEnum.access
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.CreateCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER, common_2.userRole.ADMIN],
        typeToken: common_2.TokenTypeEnum.access
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.paramDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeProducFromCartCst", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER, common_2.userRole.ADMIN],
        typeToken: common_2.TokenTypeEnum.access
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.paramDto,
        cart_dto_1.updateQuantityDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateQuantityCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map