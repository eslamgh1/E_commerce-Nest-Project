import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBrandDto } from './brand.dto';
import { HUserDocument } from 'src/DB';
import { BrandRepo } from 'src/DB/repositories/brand.repositories';
import { S3Service } from 'src/common';


@Injectable()
export class BrandService {
    // inject brand repo
    constructor(
        private readonly brandRepo: BrandRepo,
        private readonly s3Service: S3Service,

    ) { }

    async createBrand(brandDto: CreateBrandDto, user: HUserDocument, file: Express.Multer.File) {
        const { name, slogan } = brandDto

        const brandExist = await this.brandRepo.findOne({ filter: { name } })

        if (brandExist) {
            throw new ConflictException('Brand already exist')
        }

        // uploadFile return but the key/path  anot full URL
        const url = await this.s3Service.uploadFile({ file, path: 'brand' })

        const brand = await this.brandRepo.create({
            name,
            slogan,
            image: url,
            createdBy: user._id
        })


        if (!brand) {
            await this.s3Service.deleteFile({

                Key: url
            })
            throw new InternalServerErrorException('Faild to create brand')
        }

            return brand
    }
   



}


//until 10 mins