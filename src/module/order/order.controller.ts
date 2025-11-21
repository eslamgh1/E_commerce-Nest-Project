import { Body, Controller, Delete, Get, Param, ParseFilePipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import type { HUserDocument } from 'src/DB';
import { TokenTypeEnum, userRole } from 'src/common';
import { Userdecorator } from 'src/common/decorators/user.decorator';
import { Auth } from 'src/common/decorators/auth.decorators';
import { FileInterceptor } from '@nestjs/platform-express'; // ⬅️
import { fileValidation, multerCloud } from 'src/common/utils';
import { Types } from 'mongoose';
import { CouponService } from '../coupon/coupon.service';
import { OrderService } from './order.service';
import { CreateCouponDto } from '../coupon/coupon.dto';
import { CreateOrderDto } from './order.dto';


@Controller('order')
export class OrderController {
    constructor(
        private readonly couponService: CouponService
        , private readonly orderService: OrderService
    ) { }
    // 1-----------------------Api : 
    @Auth({
        role: [userRole.USER, userRole.ADMIN],
        typeToken: TokenTypeEnum.access
    })
    @Post()

    async createOrder(
        @Body() body: CreateOrderDto,
        @Userdecorator() user: HUserDocument,

    ) {

        return await this.orderService.createOrder(body, user)

    }



}
