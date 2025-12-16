import { BrandService } from './brand.service';
import { CreateBrandDto, idDto, QueryDto, updateBrandDto } from './brand.dto';
import type { HUserDocument } from 'src/DB';
import { Types } from 'mongoose';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createBrand(brandDto: CreateBrandDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        brand: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    updateBrand(params: idDto, brandDto: updateBrandDto, user: HUserDocument): Promise<{
        message: string;
        brand: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>) | null;
    }>;
    updateBrandImage(params: idDto, user: HUserDocument, file: Express.Multer.File): Promise<{
        message: string;
        brand: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    freezeBrand(params: idDto, user: HUserDocument): Promise<{
        message: string;
        brand: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    restoreBrand(params: idDto, user: HUserDocument): Promise<{
        message: string;
        brand: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    deleteBrand(params: idDto): Promise<{
        message: string;
        brand: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Brand, {}, {}> & import("src/DB").Brand & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
    getAllBrands(query: QueryDto): Promise<{
        message: string;
        brands: {
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
        };
    }>;
    getAllBrandsCashing(query: QueryDto): Promise<{
        message: string;
        brands: unknown;
    }>;
}
