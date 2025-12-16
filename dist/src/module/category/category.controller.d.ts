import { CreateCategoryDto, idDto, QueryDto, updateCategoryDto } from './category.dto';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
import { CategoryService } from './category.service';
export declare class categoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createcategory(categoryDto: CreateCategoryDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    updatecategory(params: idDto, categoryDto: updateCategoryDto, user: HUserDocument): Promise<{
        message: string;
        category: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
    updatecategoryImage(params: idDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    freezecategory(params: idDto, user: HUserDocument): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    restorecategory(params: idDto, user: HUserDocument): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    deletecategory(params: idDto): Promise<{
        message: string;
        category: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Category, {}, {}> & import("src/DB").Category & {
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
        };
    }>;
}
