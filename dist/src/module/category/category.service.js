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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const common_2 = require("../../common");
const crypto_1 = require("crypto");
let CategoryService = class CategoryService {
    CategoryRepo;
    s3Service;
    brandRepo;
    constructor(CategoryRepo, s3Service, brandRepo) {
        this.CategoryRepo = CategoryRepo;
        this.s3Service = s3Service;
        this.brandRepo = brandRepo;
    }
    async createCategory(CategoryDto, user, file) {
        const { name, slogan, brands } = CategoryDto;
        const CategoryExist = await this.CategoryRepo.findOne({ filter: { name } });
        if (CategoryExist) {
            throw new common_1.ConflictException('Category already exist');
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
        const Category = await this.CategoryRepo.create({
            name,
            slogan,
            image: url,
            createdBy: user._id,
            assetFolderId,
            brands: strictIds
        });
        if (!Category) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to create Category');
        }
        return Category;
    }
    async updateCategory(id, CategoryDto, user) {
        const { name, slogan, brands } = CategoryDto;
        const Category = await this.CategoryRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!Category) {
            throw new common_1.NotFoundException('Category not found or owned by another user');
        }
        if (name && await this.CategoryRepo.findOne({ filter: { name } })) {
            throw new common_1.ConflictException('Category already exist');
        }
        const strictIds = [...new Set(brands || [])];
        if (brands && (await this.brandRepo.find({ filter: { _id: { $in: strictIds } } })).length !== strictIds.length) {
            throw new common_1.NotFoundException('Brand not found');
        }
        const updatedCategory = await this.CategoryRepo.findOneAndUpdate({
            filter: { _id: id, createdBy: user._id },
            update: { name, slogan, brands: strictIds },
            options: { new: true }
        });
        return updatedCategory;
    }
    async updateCategoryImage(id, file, user) {
        const Category = await this.CategoryRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!Category) {
            throw new common_1.NotFoundException('Category not found or owned by another user');
        }
        const url = await this.s3Service.uploadFile({ file,
            path: `categories/${Category.assetFolderId}` });
        const updatedCategory = await this.CategoryRepo.findOneAndUpdate({
            filter: { _id: id, createdBy: user._id },
            update: { image: url },
            options: { new: true }
        });
        if (!updatedCategory) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to update Category image');
        }
        const deletedImage = await this.s3Service.deleteFile({
            Key: Category.image
        });
        return updatedCategory;
    }
    async freezeCategory(id, user) {
        const Category = await this.CategoryRepo.findOneAndUpdate({
            filter: { _id: id, deletedAt: { $exists: false } },
            update: { deletedAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!Category) {
            throw new common_1.NotFoundException('Category not found or  deleted');
        }
        return Category;
    }
    async restoreCategory(id, user) {
        const Category = await this.CategoryRepo.findOneAndUpdate({
            filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
            update: { $unset: { deletedAt: "" }, restoredAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!Category) {
            throw new common_1.NotFoundException('Category not found or  deleted');
        }
        return Category;
    }
    async deleteCategory(id) {
        const deletedCategory = await this.CategoryRepo.findOneAndDelete({
            filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
        });
        if (!deletedCategory) {
            throw new common_1.NotFoundException('Category not found or not soft deleted or owned by another user');
        }
        await this.s3Service.deleteFile({
            Key: deletedCategory.image
        });
        return deletedCategory;
    }
    async getAllCategorys(query) {
        const { page = 1, limit = 1, search } = query;
        const { currentPage, totalDocs, numPages, docs } = await this.CategoryRepo.paginate({
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
        return { message: "Done All Categorys", currentPage, totalDocs, numPages, docs };
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.CategoryRepo,
        common_2.S3Service,
        DB_1.BrandRepo])
], CategoryService);
//# sourceMappingURL=category.service.js.map