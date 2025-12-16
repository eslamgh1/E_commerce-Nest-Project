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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const brand_repositories_1 = require("../../DB/repositories/brand.repositories");
const common_2 = require("../../common");
const cache_manager_1 = require("@nestjs/cache-manager");
let BrandService = class BrandService {
    brandRepo;
    s3Service;
    cacheManager;
    constructor(brandRepo, s3Service, cacheManager) {
        this.brandRepo = brandRepo;
        this.s3Service = s3Service;
        this.cacheManager = cacheManager;
    }
    async createBrand(brandDto, user, file) {
        const { name, slogan } = brandDto;
        const brandExist = await this.brandRepo.findOne({ filter: { name } });
        if (brandExist) {
            throw new common_1.ConflictException('Brand already exist');
        }
        const url = await this.s3Service.uploadFile({ file, path: 'brand' });
        const brand = await this.brandRepo.create({
            name,
            slogan,
            image: url,
            createdBy: user._id
        });
        if (!brand) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to create brand');
        }
        return brand;
    }
    async updateBrand(id, brandDto, user) {
        const { name, slogan } = brandDto;
        const brand = await this.brandRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!brand) {
            throw new common_1.NotFoundException('Brand not found or owned by another user');
        }
        if (name && await this.brandRepo.findOne({ filter: { name } })) {
            throw new common_1.ConflictException('Brand already exist');
        }
        const updatedBrand = await this.brandRepo.findOneAndUpdate({ filter: { _id: id, createdBy: user._id },
            update: { name, slogan },
            options: { new: true }
        });
        return updatedBrand;
    }
    async updateBrandImage(id, file, user) {
        const brand = await this.brandRepo.findOne({ filter: { _id: id, createdBy: user._id } });
        if (!brand) {
            throw new common_1.NotFoundException('Brand not found or owned by another user');
        }
        const url = await this.s3Service.uploadFile({ file, path: 'brand' });
        const updatedBrand = await this.brandRepo.findOneAndUpdate({
            filter: { _id: id, createdBy: user._id },
            update: { image: url },
            options: { new: true }
        });
        if (!updatedBrand) {
            await this.s3Service.deleteFile({
                Key: url
            });
            throw new common_1.InternalServerErrorException('Faild to update brand image');
        }
        const deletedImage = await this.s3Service.deleteFile({
            Key: brand.image
        });
        return updatedBrand;
    }
    async freezeBrand(id, user) {
        const brand = await this.brandRepo.findOneAndUpdate({ filter: { _id: id, deletedAt: { $exists: false } },
            update: { deletedAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!brand) {
            throw new common_1.NotFoundException('Brand not found or  deleted');
        }
        return brand;
    }
    async restoreBrand(id, user) {
        const brand = await this.brandRepo.findOneAndUpdate({ filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
            update: { $unset: { deletedAt: "" }, restoredAt: new Date(), updatedBy: user._id }, options: { new: true }
        });
        if (!brand) {
            throw new common_1.NotFoundException('Brand not found or  deleted');
        }
        return brand;
    }
    async deleteBrand(id) {
        const deletedBrand = await this.brandRepo.findOneAndDelete({ filter: { _id: id, deletedAt: { $exists: true }, paranoid: false },
        });
        if (!deletedBrand) {
            throw new common_1.NotFoundException('Brand not found or not soft deleted or owned by another user');
        }
        await this.s3Service.deleteFile({
            Key: deletedBrand.image
        });
        return deletedBrand;
    }
    async getAllBrands(query) {
        const { page = 1, limit = 1, search } = query;
        const { currentPage, totalDocs, numPages, docs } = await this.brandRepo.paginate({
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
        return { message: "Done All brands", currentPage, totalDocs, numPages, docs };
    }
    async getAllBrandsCashing(query) {
        let brands = await this.cacheManager.get("brands");
        if (!brands) {
            console.log("cashing test");
            await this.brandRepo.find({ filter: {} });
            await this.cacheManager.set("brands", brands);
        }
        return brands;
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [brand_repositories_1.BrandRepo,
        common_2.S3Service,
        cache_manager_1.Cache])
], BrandService);
//# sourceMappingURL=brand.service.js.map