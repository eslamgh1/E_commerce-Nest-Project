import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import {  CartModel, CartRepo, ProductRepo, UserModel, UserRepo } from 'src/DB';
import { TokenService } from 'src/common/service/token.services';
import { JwtService } from '@nestjs/jwt';
import { S3Service } from 'src/common';
// import { ProductRepo } from 'src/DB/repositories/product.repository';
import { ProductModel } from 'src/DB/models/product.model';
import { CartService } from './cart.service';

@Module({
  imports:[UserModel ,ProductModel,CartModel],
  controllers: [CartController],
  providers: [CartService, TokenService ,JwtService , UserRepo  ,S3Service,CartRepo ,ProductRepo]
})
export class CartModule {}
