import { Types } from "mongoose";
export declare class CreateSubCategoryDto {
    name: string;
    slogan: string;
    brands: Types.ObjectId[];
}
export declare class idDto {
    id: Types.ObjectId;
}
declare const updateSubCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSubCategoryDto>>;
export declare class updateSubCategoryDto extends updateSubCategoryDto_base {
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
export {};
