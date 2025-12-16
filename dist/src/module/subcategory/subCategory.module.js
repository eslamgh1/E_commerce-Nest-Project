"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const token_services_1 = require("../../common/service/token.services");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../../common");
const subCategory_controller_1 = require("./subCategory.controller");
const subCategory_service_1 = require("./subCategory.service");
const subCategory_repositories_1 = require("../../DB/repositories/subCategory.repositories");
let SubCategoryModule = class SubCategoryModule {
};
exports.SubCategoryModule = SubCategoryModule;
exports.SubCategoryModule = SubCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [DB_1.CategoryModel, DB_1.BrandModel, DB_1.UserModel, DB_1.SubCategoryModel],
        controllers: [subCategory_controller_1.SubCategoryController],
        providers: [subCategory_service_1.SubCategoryService, token_services_1.TokenService, jwt_1.JwtService, DB_1.UserRepo, DB_1.CategoryRepo, common_2.S3Service, DB_1.BrandRepo, subCategory_repositories_1.SubCategoryRepo]
    })
], SubCategoryModule);
//# sourceMappingURL=subCategory.module.js.map