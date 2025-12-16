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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const brand_dto_1 = require("./brand.dto");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("../../common/utils");
let BrandController = class BrandController {
    brandService;
    constructor(brandService) {
        this.brandService = brandService;
    }
    async createBrand(brandDto, user, file) {
        const brand = await this.brandService.createBrand(brandDto, user, file);
        return { message: 'Brand created successfully', brand };
    }
    async updateBrand(params, brandDto, user) {
        const brand = await this.brandService.updateBrand(params.id, brandDto, user);
        return { message: 'Brand updated successfully', brand };
    }
    async updateBrandImage(params, user, file) {
        const brand = await this.brandService.updateBrandImage(params.id, file, user);
        return { message: 'Brand image updated successfully', brand };
    }
    async freezeBrand(params, user) {
        const brand = await this.brandService.freezeBrand(params.id, user);
        return { message: 'Brand freeze successfully', brand };
    }
    async restoreBrand(params, user) {
        const brand = await this.brandService.restoreBrand(params.id, user);
        return { message: 'Brand restored successfully', brand };
    }
    async deleteBrand(params) {
        const brand = await this.brandService.deleteBrand(params.id);
        return { message: 'Brand deleted successfully', brand };
    }
    async getAllBrands(query) {
        const brands = await this.brandService.getAllBrands(query);
        return { message: "Done All brands", brands };
    }
    async getAllBrandsCashing(query) {
        const brands = await this.brandService.getAllBrandsCashing(query);
        return { message: "Done All brands", brands };
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("attachment", (0, utils_1.multerCloud)({ fileType: utils_1.fileValidation.image }))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __param(2, (0, common_1.UploadedFile)(common_1.ParseFilePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.CreateBrandDto, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/update/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.idDto,
        brand_dto_1.updateBrandDto, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateBrand", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("attachment", (0, utils_1.multerCloud)({ fileType: utils_1.fileValidation.image }))),
    (0, common_1.Patch)("/update/image/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __param(2, (0, common_1.UploadedFile)(common_1.ParseFilePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.idDto, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateBrandImage", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/freeze/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "freezeBrand", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/restore/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "restoreBrand", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "deleteBrand", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllBrands", null);
__decorate([
    (0, common_1.Get)("/getbrandscash"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllBrandsCashing", null);
exports.BrandController = BrandController = __decorate([
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
//# sourceMappingURL=brand.controller.js.map