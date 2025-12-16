import { Types } from "mongoose";
export declare class CreateProductDto {
    name: string;
    description: string;
    price: number;
    discount: number;
    brand: Types.ObjectId;
    category: Types.ObjectId;
    quantity: number;
    stock: number;
}
declare const updateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class updateProductDto extends updateProductDto_base {
}
export declare class paramDto {
    id: Types.ObjectId;
}
export {};
