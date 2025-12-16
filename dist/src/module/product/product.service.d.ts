import { CreateProductDto, updateProductDto } from './product.dto';
import { CategoryRepo, ProductRepo } from 'src/DB';
import { BrandRepo } from 'src/DB/repositories/brand.repositories';
import { S3Service } from 'src/common';
import type { HUserDocument } from 'src/DB';
import { UserRepo } from 'src/DB/repositories/user.repositories';
import { Types } from 'mongoose';
export declare class ProductService {
    private readonly ProductRepo;
    private readonly categoryRepo;
    private readonly brandRepo;
    private readonly s3Service;
    private readonly UserRepo;
    constructor(ProductRepo: ProductRepo, categoryRepo: CategoryRepo, brandRepo: BrandRepo, s3Service: S3Service, UserRepo: UserRepo);
    createProduct(productDto: CreateProductDto, user: HUserDocument, files: {
        mainImage: Express.Multer.File[];
        subImages: Express.Multer.File[];
    }): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateProduct(body: updateProductDto, user: HUserDocument, id: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    addToWishListProduct(user: HUserDocument, id: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
}
