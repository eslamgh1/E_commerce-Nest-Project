    import { Body, Controller, Delete, Get, Param, ParseFilePipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
    import {  CreateReviewDto, idDto, QueryDto } from './review.dto';
    import type { HUserDocument } from 'src/DB';
    import { TokenTypeEnum, userRole } from 'src/common';
    import { Userdecorator } from 'src/common/decorators/user.decorator';
    import { Auth } from 'src/common/decorators/auth.decorators';
    import { FileInterceptor } from '@nestjs/platform-express'; // ⬅️ IMPORT THIS
import { fileValidation, multerCloud } from 'src/common/utils';
import { Types } from 'mongoose';
import { ReviewService } from './review.service';


    @Controller('Reviews')
    export class ReviewController {
        constructor(private readonly ReviewService: ReviewService) { }
// 1-----------------------Api : create Review
        @Auth({
            role: [userRole.USER],
            typeToken: TokenTypeEnum.access
        })
        @Post()
        //It extracts the text fields (like name and slogan) 
        // and places them into the standard Express request body (req.body), 
        // allowing your @Body() decorator to work.

              //naming convention: ReviewDto = body = any name
        async createReview(
            @Body() ReviewDto: CreateReviewDto,
            @Userdecorator() user: HUserDocument,

        ) {
            //The local variable Review inside ReviewController.createReview() is assigned the value 
            // that was returned from ReviewService.createReview().
            const Review = await this.ReviewService.createReview(ReviewDto, user)
            return { message: 'Review created successfully', Review }
        }


// // 2-----------------------Api : update Review
//      @Auth({
//             role: [userRole.USER],
//             typeToken: TokenTypeEnum.access
//         })
//         @Patch("/update/:id")
//               //naming convention: ReviewDto = body = any name
//         async updateReview(
//             @Param() params: idDto,
//             @Body() ReviewDto: updateReviewDto,
//             @Userdecorator() user: HUserDocument,
//         ) {
//             //The local variable Review inside ReviewController.createReview() is assigned the value 
//             // that was returned from ReviewService.createReview().
//             const Review = await this.ReviewService.updateReview(params.id,ReviewDto, user)
//             return { message: 'Review updated successfully', Review }
//         }




        // // 6------------------------Api : delete Review
        // @Auth({
        //     role: [userRole.USER],
        //     typeToken: TokenTypeEnum.access
        // })
        // @Delete("/:id")
        // async deleteReview(
        //     @Param() params: idDto,
            
        // ) {

        //     const Review = await this.ReviewService.deleteReview (params.id)
        //     return { message: 'Review deleted successfully', Review }
        // }

        // // 7------------------------Api : get All Reviews
        // @Get()
        // async getAllReviews(
        //     // query: QueryDto  == query: {page: number, limit: number}
        //     @Query() query: QueryDto
        // ) {
        //     const Reviews = await this.ReviewService.getAllReviews(query)
        //     return {message:"Done All Reviews",Reviews}
        // }






    }
