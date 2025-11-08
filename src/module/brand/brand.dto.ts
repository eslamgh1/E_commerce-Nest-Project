//BrandDto is a class that is used to validate the data that body is sent to the server
import { IsNotEmpty, IsString, Length } from "class-validator";


export class CreateBrandDto {
  @IsString()
  @Length(2, 255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(2, 25)
  @IsNotEmpty()
  slogan: string;


}