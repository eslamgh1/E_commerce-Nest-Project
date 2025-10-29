import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from 'src/DB/models';
import { OtpRepo, UserRepo } from 'src/DB';
import { OtpModel } from 'src/DB/models';


@Module({
  imports:[UserModel , OtpModel],
  controllers: [UserController],
  providers: [UserService,UserRepo,OtpRepo] // service,repo
}) 
export class UserModule {}
