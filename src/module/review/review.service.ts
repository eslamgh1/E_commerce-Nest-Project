import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReviewDto, QueryDto } from './review.dto';
import { CartRepo, HUserDocument, OrderRepo, ReviewRepo } from 'src/DB';
import { orderStatusEnum, S3Service } from 'src/common';
import { Types } from 'mongoose';



@Injectable()
export class ReviewService {
    // inject Review repo
    constructor(
        private readonly ReviewRepo: ReviewRepo,
        private readonly S3Service: S3Service,
        private readonly cartRepo: CartRepo,
        private readonly orderRepo: OrderRepo

        // @Inject(CACHE_MANAGER) private cacheManager: Cache

    ) { }

    // 1-----------------------Api : create Review service
    async createReview(ReviewDto: CreateReviewDto, user: HUserDocument) {
        const { rating, title, cstReview ,orderId} = ReviewDto

        // check order
       // 1. Fetch the order for validation
const order = await this.orderRepo.findOne({
        filter: {
            _id: orderId, 
            userID: user._id, 
           
        },
        options: {
            populate: [
                {
                    path: "cart",
                    populate: [{
                        path: "products.productId" // Populate cart items and their product details
                    }]
                }
            ]
        }
    });
        console.log({ order })



    }





}


