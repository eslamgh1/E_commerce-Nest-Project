import { CreateBrandDto, QueryDto, updateBrandDto } from './brand.dto';
import { HUserDocument } from 'src/DB';
import { BrandRepo } from 'src/DB/repositories/brand.repositories';
import { S3Service } from 'src/common';
import { Types } from 'mongoose';
import { Cache } from '@nestjs/cache-manager';
export declare class BrandService {
    private readonly brandRepo;
    private readonly s3Service;
    private cacheManager;
    constructor(brandRepo: BrandRepo, s3Service: S3Service, cacheManager: Cache);
    createBrand(brandDto: CreateBrandDto, user: HUserDocument, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateBrand(id: Types.ObjectId, brandDto: updateBrandDto, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    updateBrandImage(id: Types.ObjectId, file: Express.Multer.File, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    freezeBrand(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    restoreBrand(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    deleteBrand(id: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    getAllBrands(query: QueryDto): Promise<{
        message: string;
        currentPage: number;
        totalDocs: number;
        numPages: number;
        docs: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>)[];
    }>;
    getAllBrandsCashing(query: QueryDto): Promise<unknown>;
}
