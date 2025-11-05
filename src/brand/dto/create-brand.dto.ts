    import { Allow, IsEmail, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString, Length, Max, Min, registerDecorator, Validate, ValidateIf, ValidationOptions } from "class-validator";
import { Types } from "mongoose";
    import { IsMatch } from "src/common/decorators";
    import { userGender } from "src/common/enums";

export class CreateBrandDto {


      @IsString({message: 'name must be a string'})
      @IsNotEmpty({message: 'query name is required'})
      @Length(3 ,25 , {message: 'name must be between 3 and 25 characters'})
      name: string;

      @IsString()
      image: string;


      @IsMongoId() 
      createdBy: Types.ObjectId;
    
    
    
}
