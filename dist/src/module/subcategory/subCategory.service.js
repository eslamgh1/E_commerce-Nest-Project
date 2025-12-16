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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const common_2 = require("../../common");
const crypto_1 = require("crypto");
const subCategory_repositories_1 = require("../../DB/repositories/subCategory.repositories");
let SubCategoryService = class SubCategoryService {
    SubCategoryRepo;
    s3Service;
    brandRepo;
    constructor(SubCategoryRepo, s3Service, brandRepo) {
        this.SubCategoryRepo = SubCategoryRepo;
        this.s3Service = s3Service;
        this.brandRepo = brandRepo;
    }
    async createSubCategory(SubCategoryDto, user, file) {
        const { name, slogan, brands } = SubCategoryDto;
        const SubCategoryExist = await this.SubCategoryRepo.findOne({ filter: { name } });
        if (SubCategoryExist) {
            throw new common_1.ConflictException('SubCategory already exist');
        }
        const strictIds = [...new Set(brands || [])];
        if (brands && (await this.brandRepo.find({ filter: { _id: { $in: strictIds } } })).length !== strictIds.length) {
            throw new common_1.NotFoundException('Brand not found');
        }
        const assetFolderId = (0, crypto_1.randomUUID)();
        const url = await this.s3Service.uploadFile({
            file,
            path: `categories/${assetFolderId}`
        });
        const SubCategory = await this.SubCategoryRepo.create({
            name,
            slogan,
            image: url,
            createdBy: user._id,
            assetFolderId,
            brands: strictIds
        });
        if (!SubCategory) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to create SubCategory');
        }
        return SubCategory;
    }
    async updateSubCategory(id, SubCategoryDto, user) {
        const { name, slogan, brands } = SubCategoryDto;
        const SubCategory = await this.SubCategoryRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!SubCategory) {
            throw new common_1.NotFoundException('SubCategory not found or owned by another user');
        }
        if (name && await this.SubCategoryRepo.findOne({ filter: { name } })) {
            throw new common_1.ConflictException('SubCategory already exist');
        }
        const strictIds = [...new Set(brands || [])];
        if (brands && (await this.brandRepo.find({ filter: { _id: { $in: strictIds } } })).length !== strictIds.length) {
            throw new common_1.NotFoundException('Brand not found');
        }
        const updatedSubCategory = await this.SubCategoryRepo.findOneAndUpdate({
            filter: { _id: id, createdBy: user._id },
            update: { name, slogan, brands: strictIds },
            options: { new: true }
        });
        return updatedSubCategory;
    }
    async updateSubCategoryImage(id, file, user) {
        const SubCategory = await this.SubCategoryRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!SubCategory) {
            throw new common_1.NotFoundException('SubCategory not found or owned by another user');
        }
        const url = await this.s3Service.uploadFile({ file,
            path: `categories/${SubCategory.assetFolderId}` });
        const updatedSubCategory = await this.SubCategoryRepo.findOneAndUpdate({
            filter: { _id: id, createdBy: user._id },
            update: { image: url },
            options: { new: true }
        });
        if (!updatedSubCategory) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to update SubCategory image');
        }
        const deletedImage = await this.s3Service.deleteFile({
            Key: SubCategory.image
        });
        return updatedSubCategory;
    }
    async freezeSubCategory(id, user) {
        const SubCategory = await this.SubCategoryRepo.findOneAndUpdate({
            filter: { _id: id, deletedAt: { $exists: false } },
            update: { deletedAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!SubCategory) {
            throw new common_1.NotFoundException('SubCategory not found or  deleted');
        }
        return SubCategory;
    }
    async restoreSubCategory(id, user) {
        const SubCategory = await this.SubCategoryRepo.findOneAndUpdate({
            filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
            update: { $unset: { deletedAt: "" }, restoredAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!SubCategory) {
            throw new common_1.NotFoundException('SubCategory not found or  deleted');
        }
        return SubCategory;
    }
    async deleteSubCategory(id) {
        const deletedSubCategory = await this.SubCategoryRepo.findOneAndDelete({
            filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
        });
        if (!deletedSubCategory) {
            throw new common_1.NotFoundException('SubCategory not found or not soft deleted or owned by another user');
        }
        await this.s3Service.deleteFile({
            Key: deletedSubCategory.image
        });
        return deletedSubCategory;
    }
    async getAllSubCategorys(query) {
        const { page = 1, limit = 1, search } = query;
        const { currentPage, totalDocs, numPages, docs } = await this.SubCategoryRepo.paginate({
            filter: {
                ...search ? {
                    $or: [
                        { name: { $regex: search, $options: 'i' } },
                        { slogan: { $regex: search, $options: 'i' } }
                    ]
                } : {}
            },
            query: {
                page,
                limit,
            }
        });
        return { message: "Done All SubCategorys", currentPage, totalDocs, numPages, docs };
    }
};
exports.SubCategoryService = SubCategoryService;
exports.SubCategoryService = SubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [subCategory_repositories_1.SubCategoryRepo,
        common_2.S3Service,
        DB_1.BrandRepo])
], SubCategoryService);
//# sourceMappingURL=subCategory.service.js.map