//BrandDto is a class that is used to validate the data that body is sent to the server
import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min } from "class-validator";
import { Types } from "mongoose";
import { AtLeastOne } from "src/common/decorators/brand.decorator";


export class CreateCartDto {

  @IsMongoId()
  @IsNotEmpty()
  productId: Types.ObjectId;


  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  quantity: number

  // @IsMongoId()
  // @IsNotEmpty()
  // subCategory: Types.ObjectId
}



// @AtLeastOne(['name', 'description', 'price', 'discount', 'brand', 'category', 'quantity', 'stock'])
// export class updateProductDto  extends PartialType(CreateCartDto){

// }


export class paramDto {
  @IsMongoId()
  @IsNotEmpty()
  id: Types.ObjectId;
}
