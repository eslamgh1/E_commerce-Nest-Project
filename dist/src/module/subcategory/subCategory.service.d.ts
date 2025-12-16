import { CreateSubCategoryDto, QueryDto, updateSubCategoryDto } from './subCategory.dto';
import { BrandRepo, HUserDocument } from 'src/DB';
import { S3Service } from 'src/common';
import { Types } from 'mongoose';
import { SubCategoryRepo } from 'src/DB/repositories/subCategory.repositories';
export declare class SubCategoryService {
    private readonly SubCategoryRepo;
    private readonly s3Service;
    private readonly brandRepo;
    constructor(SubCategoryRepo: SubCategoryRepo, s3Service: S3Service, brandRepo: BrandRepo);
    createSubCategory(SubCategoryDto: CreateSubCategoryDto, user: HUserDocument, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    updateSubCategory(id: Types.ObjectId, SubCategoryDto: updateSubCategoryDto, user: HUserDocument): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
    updateSubCategoryImage(id: Types.ObjectId, file: Express.Multer.File, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    freezeSubCategory(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    restoreSubCategory(id: Types.ObjectId, user: HUserDocument): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    deleteSubCategory(id: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    getAllSubCategorys(query: QueryDto): Promise<{
        message: string;
        currentPage: number;
        totalDocs: number;
        numPages: number;
        docs: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>)[];
    }>;
}
