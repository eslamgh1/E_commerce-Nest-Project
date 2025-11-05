import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandRepo } from 'src/DB/repositories/brand.repositories';

@Injectable()
export class BrandService {

  constructor(private readonly BrandRepo: BrandRepo) { }

  // create(createBrandDto: CreateBrandDto) {
  //   return 'This action adds a new brand';
  // }

  async createBrand(body: CreateBrandDto) {
    const { name, image, createdBy } = body

    const brand = await this.BrandRepo.findOne({ filter: { name } })
    if (brand) {
      throw new BadRequestException("brand already exists")
    }

    const newBrand = await this.BrandRepo.create({
      name,
      createdBy,
      image,
    })

    return newBrand
  }

  findAll() {
    return `This action returns all brand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
