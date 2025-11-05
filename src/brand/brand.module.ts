import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';

import { BrandModel } from 'src/DB/models';
import { BrandRepo } from 'src/DB';



@Module({
  imports:[BrandModel],
  controllers: [BrandController],
  providers: [BrandService,BrandRepo],
})
export class BrandModule {}
