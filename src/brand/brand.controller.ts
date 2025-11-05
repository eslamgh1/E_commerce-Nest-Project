import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandService } from './brand.service';
import { fileValidation, multerCloud } from 'src/common/utils';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  // @Post()
  // create(@Body() createBrandDto: CreateBrandDto) {
  //   return this.brandService.create(createBrandDto);
  // }

   @Post("createbrand")

   
  create(@Body() body: CreateBrandDto) {
    return this.brandService.createBrand(body);
  }

  
  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
