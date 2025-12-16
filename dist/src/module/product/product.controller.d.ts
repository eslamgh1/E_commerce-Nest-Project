import type { HUserDocument } from 'src/DB';
import { ProductService } from './product.service';
import { CreateProductDto, paramDto, updateProductDto } from './product.dto';
export declare class ProductController {
    private readonly ProductService;
    constructor(ProductService: ProductService);
    createProduct(productDto: CreateProductDto, user: HUserDocument, files: {
        mainImage: Express.Multer.File[];
        subImages: Express.Multer.File[];
    }): Promise<{
        message: string;
        product: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    updateProduct(param: paramDto, body: updateProductDto, user: HUserDocument): Promise<{
        message: string;
        product: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").Product, {}, {}> & import("src/DB").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>) | null;
    }>;
    addToWishList(param: paramDto, user: HUserDocument): Promise<{
        message: string;
        userExist: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("src/DB").User, {}, {}> & import("src/DB").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>) | null;
    }>;
}
