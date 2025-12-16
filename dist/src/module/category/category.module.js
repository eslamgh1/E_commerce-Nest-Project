"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const token_services_1 = require("../../common/service/token.services");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("../../common");
const category_controller_1 = require("./category.controller");
const category_service_1 = require("./category.service");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [DB_1.CategoryModel, DB_1.BrandModel, DB_1.UserModel],
        controllers: [category_controller_1.categoryController],
        providers: [category_service_1.CategoryService, token_services_1.TokenService, jwt_1.JwtService, DB_1.UserRepo, DB_1.CategoryRepo, common_2.S3Service, DB_1.BrandRepo]
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map