import { Types } from "mongoose";
export declare class CreateCategoryDto {
    name: string;
    slogan: string;
    brands: Types.ObjectId[];
}
export declare class idDto {
    id: Types.ObjectId;
}
declare const updateCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class updateCategoryDto extends updateCategoryDto_base {
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
export {};
