    import { Body, Controller, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
    import { BrandService } from './brand.service';
    import { CreateBrandDto } from './brand.dto';
    import type { HUserDocument } from 'src/DB';
    import { TokenTypeEnum, userRole } from 'src/common';
    import { Userdecorator } from 'src/common/decorators/user.decorator';
    import { Auth } from 'src/common/decorators/auth.decorators';
    import { FileInterceptor } from '@nestjs/platform-express'; // ⬅️ IMPORT THIS
import { fileValidation, multerCloud } from 'src/common/utils';


    @Controller('brands')
    export class BrandController {
        constructor(private readonly brandService: BrandService) { }

        @Auth({
            role: [userRole.USER],
            typeToken: TokenTypeEnum.access
        })

        @Post()
  
        //It extracts the text fields (like name and slogan) 
        // and places them into the standard Express request body (req.body), 
        // allowing your @Body() decorator to work.
        @UseInterceptors(FileInterceptor("attachment" , multerCloud({fileType: fileValidation.image})))
              //naming convention: brandDto = body = any name
        async createBrand(
            @Body() brandDto: CreateBrandDto,
            @Userdecorator() user: HUserDocument,
            @UploadedFile(ParseFilePipe) file: Express.Multer.File
        ) {
            //The local variable brand inside BrandController.createBrand() is assigned the value 
            // that was returned from BrandService.createBrand().
            const brand = await this.brandService.createBrand(brandDto, user, file)
            return { message: 'Brand created successfully', brand }
        }
    }
