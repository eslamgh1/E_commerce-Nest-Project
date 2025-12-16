import { Types } from "mongoose";
export declare class CreateBrandDto {
    name: string;
    slogan: string;
}
export declare class idDto {
    id: Types.ObjectId;
}
declare const updateBrandDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBrandDto>>;
export declare class updateBrandDto extends updateBrandDto_base {
}
export declare class QueryDto {
    page?: number;
    limit?: number;
    search?: string;
}
export {};
