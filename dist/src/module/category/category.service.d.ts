import { CreateCategoryDto, QueryDto, updateCategoryDto } from './category.dto';
import { BrandRepo, CategoryRepo, HUserDocument } from 'src/DB';
import { S3Service } from 'src/common';
import { Types } from 'mongoose';
export declare class CategoryService {
    private readonly CategoryRepo;
    private readonly s3Service;
    private readonly brandRepo;
    constructor(CategoryRepo: CategoryRepo, s3Service: S3Service, brandRepo: BrandRepo);
    createCategory(CategoryDto: CreateCategoryDto, user: HUserDocument, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateCategory(id: Types.ObjectId, CategoryDto: updateCategoryDto, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    updateCategoryImage(id: Types.ObjectId, file: Express.Multer.File, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    freezeCategory(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    restoreCategory(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    deleteCategory(id: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    getAllCategorys(query: QueryDto): Promise<{
        message: string;
        currentPage: number;
        totalDocs: number;
        numPages: number;
        docs: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>)[];
    }>;
}
