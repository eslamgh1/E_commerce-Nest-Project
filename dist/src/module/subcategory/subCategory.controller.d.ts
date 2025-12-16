import { CreateSubCategoryDto, idDto, QueryDto, updateSubCategoryDto } from './subCategory.dto';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
import { SubCategoryService } from './subCategory.service';
export declare class SubCategoryController {
    private readonly categoryService;
    constructor(categoryService: SubCategoryService);
    createcategory(categoryDto: CreateSubCategoryDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    updatecategory(params: idDto, categoryDto: updateSubCategoryDto, user: HUserDocument): Promise<{
        message: string;
        category: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
    updatecategoryImage(params: idDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    freezecategory(params: idDto, user: HUserDocument): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    restorecategory(params: idDto, user: HUserDocument): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    deletecategory(params: idDto): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").SubCategory, {}, {}> & import("src/DB").SubCategory & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    getAllcategorys(query: QueryDto): Promise<{
        message: string;
        categoryes: {
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
        };
    }>;
}
