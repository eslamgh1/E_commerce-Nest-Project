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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const DB_1 = require("../../DB");
const brand_repositories_1 = require("../../DB/repositories/brand.repositories");
const common_2 = require("../../common");
const user_repositories_1 = require("../../DB/repositories/user.repositories");
let ProductService = class ProductService {
    ProductRepo;
    categoryRepo;
    brandRepo;
    s3Service;
    UserRepo;
    constructor(ProductRepo, categoryRepo, brandRepo, s3Service, UserRepo) {
        this.ProductRepo = ProductRepo;
        this.categoryRepo = categoryRepo;
        this.brandRepo = brandRepo;
        this.s3Service = s3Service;
        this.UserRepo = UserRepo;
    }
    async createProduct(productDto, user, files) {
        let { name, description, price, discount, brand, category, quantity, stock } = productDto;
        const brandExist = await this.brandRepo.findOne({ filter: { _id: brand } });
        if (!brandExist) {
            throw new common_1.ConflictException('brand not found');
        }
        const categoryExist = await this.categoryRepo.findOne({ filter: { _id: category } });
        if (!categoryExist) {
            throw new common_1.ConflictException('category not found');
        }
        if (stock < quantity) {
            throw new common_1.BadRequestException('stock is less than quantity');
        }
        price = price - (price * ((discount || 0) / 100));
        const filePath = files.mainImage[0];
        const filesPath = files.subImages;
        const mainImage = await this.s3Service.uploadFile({
            file: filePath,
            path: `categories/${categoryExist.assetFolderId}/products/mainImage`
        });
        const subImages = await this.s3Service.uploadFiles({
            files: filesPath,
            path: `categories/${categoryExist.assetFolderId}/products/subImages`
        });
        const product = await this.ProductRepo.create({
            name,
            description,
            price,
            discount,
            brand,
            category,
            quantity,
            stock,
            mainImage,
            subImages,
            createdBy: user._id
        });
        if (!product) {
            await this.s3Service.deleteFile({
                Key: mainImage
            });
            await this.s3Service.deleteFiles({
                urls: subImages
            });
            throw new common_1.InternalServerErrorException('Faild to create product');
        }
        return product;
    }
    async updateProduct(body, user, id) {
        let { name, description, price, discount, brand, category, quantity, stock } = body;
        let product = await this.ProductRepo.findOne({ filter: { _id: id } });
        if (!product) {
            throw new common_1.BadRequestException("Product not found");
        }
        if (category) {
            const categoryExist = await this.categoryRepo.findOne({ filter: { _id: category } });
            if (!categoryExist) {
                throw new common_1.BadRequestException('category not found');
            }
        }
        if (brand) {
            const brandExist = await this.brandRepo.findOne({ filter: { _id: brand } });
            if (!brandExist) {
                throw new common_1.BadRequestException('brand not found');
            }
        }
        if (price && discount) {
            price = price - (price * (discount / 100));
        }
        else if (price) {
            price = price - (price * (product.discount / 100));
        }
        else if (discount) {
            price = product.price - (product.price * (discount / 100));
        }
        if (stock) {
            if (stock > product.quantity) {
                throw new common_1.BadRequestException("stock should be less than quantity");
            }
        }
        product = await this.ProductRepo.findOneAndUpdate({
            filter: { _id: id },
            update: {
                ...body,
                price,
                discount,
                stock,
                quantity
            },
            options: { new: true }
        });
        return product;
    }
    async addToWishListProduct(user, id) {
        let product = await this.ProductRepo.findOne({ filter: { _id: id } });
        if (!product) {
            throw new common_1.BadRequestException("Product not found");
        }
        let userExist = await this.UserRepo.findOneAndUpdate({
            filter: { _id: user._id, wishList: { $in: id } },
            update: {
                $pull: { wishList: id }
            },
            options: { new: true }
        });
        if (!userExist) {
            userExist = await this.UserRepo.findOneAndUpdate({
                filter: { _id: user._id },
                update: {
                    $push: { wishList: id }
                },
                options: { new: true }
            });
        }
        return userExist;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DB_1.ProductRepo,
        DB_1.CategoryRepo,
        brand_repositories_1.BrandRepo,
        common_2.S3Service,
        user_repositories_1.UserRepo])
], ProductService);
//# sourceMappingURL=product.service.js.map