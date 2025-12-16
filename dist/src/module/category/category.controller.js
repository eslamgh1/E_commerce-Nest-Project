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
exports.categoryController = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("./category.dto");
const common_2 = require("../../common");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_decorators_1 = require("../../common/decorators/auth.decorators");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("../../common/utils");
const category_service_1 = require("./category.service");
let categoryController = class categoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createcategory(categoryDto, user, file) {
        const category = await this.categoryService.createCategory(categoryDto, user, file);
        return { message: 'category created successfully', category };
    }
    async updatecategory(params, categoryDto, user) {
        const category = await this.categoryService.updateCategory(params.id, categoryDto, user);
        return { message: 'category updated successfully', category };
    }
    async updatecategoryImage(params, user, file) {
        const category = await this.categoryService.updateCategoryImage(params.id, file, user);
        return { message: 'category image updated successfully', category };
    }
    async freezecategory(params, user) {
        const category = await this.categoryService.freezeCategory(params.id, user);
        return { message: 'category freeze successfully', category };
    }
    async restorecategory(params, user) {
        const category = await this.categoryService.restoreCategory(params.id, user);
        return { message: 'category restored successfully', category };
    }
    async deletecategory(params) {
        const category = await this.categoryService.deleteCategory(params.id);
        return { message: 'category deleted successfully', category };
    }
    async getAllcategorys(query) {
        const categoryes = await this.categoryService.getAllCategorys(query);
        return { message: "Done All categorys", categoryes };
    }
};
exports.categoryController = categoryController;
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
    __metadata("design:paramtypes", [category_dto_1.CreateCategoryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "createcategory", null);
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
    __metadata("design:paramtypes", [category_dto_1.idDto,
        category_dto_1.updateCategoryDto, Object]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "updatecategory", null);
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
    __metadata("design:paramtypes", [category_dto_1.idDto, Object, Object]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "updatecategoryImage", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/freeze/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "freezecategory", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Patch)("/restore/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.Userdecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.idDto, Object]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "restorecategory", null);
__decorate([
    (0, auth_decorators_1.Auth)({
        role: [common_2.userRole.USER],
        typeToken: common_2.TokenTypeEnum.access
    }),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "deletecategory", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "getAllcategorys", null);
exports.categoryController = categoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], categoryController);
//# sourceMappingURL=category.controller.js.map