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
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const subCategory_dto_1 = require("./subCategory.dto");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("../../common/utils");
const subCategory_service_1 = require("./subCategory.service");
let SubCategoryController = class SubCategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createcategory(categoryDto, user, file) {
        const category = await this.categoryService.createSubCategory(categoryDto, user, file);
        return { message: 'category created successfully', category };
    }
    async updatecategory(params, categoryDto, user) {
        const category = await this.categoryService.updateSubCategory(params.id, categoryDto, user);
        return { message: 'category updated successfully', category };
    }
    async updatecategoryImage(params, user, file) {
        const category = await this.categoryService.updateSubCategoryImage(params.id, file, user);
        return { message: 'category image updated successfully', category };
    }
    async freezecategory(params, user) {
        const category = await this.categoryService.freezeSubCategory(params.id, user);
        return { message: 'category freeze successfully', category };
    }
    async restorecategory(params, user) {
        const category = await this.categoryService.restoreSubCategory(params.id, user);
        return { message: 'category restored successfully', category };
    }
    async deletecategory(params) {
        const category = await this.categoryService.deleteSubCategory(params.id);
        return { message: 'category deleted successfully', category };
    }
    async getAllcategorys(query) {
        const categoryes = await this.categoryService.getAllSubCategorys(query);
        return { message: "Done All categorys", categoryes };
    }
};
exports.SubCategoryController = SubCategoryController;
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
    __metadata("design:paramtypes", [subCategory_dto_1.CreateSubCategoryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "createcategory", null);
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
    __metadata("design:paramtypes", [subCategory_dto_1.idDto,
        subCategory_dto_1.updateSubCategoryDto, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "updatecategory", null);
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
    __metadata("design:paramtypes", [subCategory_dto_1.idDto, Object, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "updatecategoryImage", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/freeze/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategory_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "freezecategory", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/restore/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategory_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "restorecategory", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategory_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "deletecategory", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategory_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getAllcategorys", null);
exports.SubCategoryController = SubCategoryController = __decorate([
    (0, common_1.Controller)('subcategories'),
    __metadata("design:paramtypes", [subCategory_service_1.SubCategoryService])
], SubCategoryController);
//# sourceMappingURL=subCategory.controller.js.map