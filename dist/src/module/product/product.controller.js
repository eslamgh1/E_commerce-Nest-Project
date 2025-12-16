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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("../../common/utils");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./product.dto");
let ProductController = class ProductController {
    ProductService;
    constructor(ProductService) {
        this.ProductService = ProductService;
    }
    async createProduct(productDto, user, files) {
        const product = await this.ProductService.createProduct(productDto, user, files);
        return { message: 'Product is created successfully', product };
    }
    async updateProduct(param, body, user) {
        const product = await this.ProductService.updateProduct(body, user, param.id);
        return { message: 'Product is updated successfully', product };
    }
    async addToWishList(param, user) {
        const userExist = await this.ProductService.addToWishListProduct(user, param.id);
        return { message: 'Product is  added to wish list successfully', userExist };
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{
            name: "mainImage",
            maxCount: 1
        },
        {
            name: "subImages",
            maxCount: 5
        }], (0, utils_1.multerCloud)({ fileType: utils_1.fileValidation.image }))),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __param(2, (0, common_1.UploadedFiles)(common_1.ParseFilePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.paramDto,
        product_dto_1.updateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Post)("wishlist/:id"),
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.paramDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addToWishList", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('Products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map