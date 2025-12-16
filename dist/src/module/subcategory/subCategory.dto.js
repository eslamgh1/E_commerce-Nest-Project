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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDto = exports.updateSubCategoryDto = exports.idDto = exports.CreateSubCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
const decorators_1 = require("../../common/decorators");
class CreateSubCategoryDto {
    name;
    slogan;
    brands;
}
exports.CreateSubCategoryDto = CreateSubCategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSubCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 25),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSubCategoryDto.prototype, "slogan", void 0);
__decorate([
    (0, class_validator_1.Validate)(decorators_1.IdsMongo),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateSubCategoryDto.prototype, "brands", void 0);
class idDto {
    id;
}
exports.idDto = idDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], idDto.prototype, "id", void 0);
let updateSubCategoryDto = class updateSubCategoryDto extends (0, mapped_types_1.PartialType)(CreateSubCategoryDto) {
};
exports.updateSubCategoryDto = updateSubCategoryDto;
exports.updateSubCategoryDto = updateSubCategoryDto = __decorate([
    (0, decorators_1.AtLeastOne)(["name", "slogan"])
], updateSubCategoryDto);
class QueryDto {
    page;
    limit;
    search;
}
exports.QueryDto = QueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryDto.prototype, "search", void 0);
//# sourceMappingURL=subCategory.dto.js.map