import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { confirmEmailDto, loginDto, ResendOtpDto, UserDto } from '../dto/user.dto';
import { HUserDocument, OtpRepo, UserRepo } from 'src/DB';
import { otpTypeEnum, userGender, userRole } from 'src/common/enums';
import {  generateOTP } from 'src/common';
import { Types } from 'mongoose';
import { Compare } from 'src/common/security/hash';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class UserService {
    constructor(
        private readonly userRepo: UserRepo,
        private readonly otpRepo: OtpRepo,
        private jwtService: JwtService
    ) { }


    private async sendOtp(userId: Types.ObjectId) {
        const otp = generateOTP()
        await this.otpRepo.create({
            code: otp.toString(),
            createdBy: userId,
            type: otpTypeEnum.CONFIRM_EMAIL,
            expiresAt: new Date(Date.now() + 60 * 1000)
        })

    }

    // signUp method is used to register a new user
    async signUp(body: UserDto) {
        const { fName, lName, email, password, age, gender } = body

        const userExist = await this.userRepo.findOne({filter: { email }})
        if (userExist) {

            throw new BadRequestException("User already exists")
        }

        const user = await this.userRepo.create({
            email,
            password,
            age,
            fName,
            lName,
            gender: gender ? (gender as userGender) : userGender.MALE
        })


        if (!user) {
            throw new BadRequestException("User not created")
        }

        await this.sendOtp(user._id)
        return user
    }

    // ResendOtp method is used to register a new user
    async ResendOtp(body: ResendOtpDto) {
        const { email } = body

        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: false }
            },
            options: {
                populate: {
                    path: "otp",
              
                }
            }
        })

        // console.log(user)
        console.log("otp", user?.otp)
        console.log("user", user)


        if (!user) {
            throw new ForbiddenException("User is not found")
        }

        if((user.otp as any).length > 0){
            throw new BadRequestException("Otp already sent")
        }


        await this.sendOtp(user._id)
        return { message: "Otp sent successfully" ,user }
    }

    // confirmEmail method is used to register a new user
    async confirmEmail(body: confirmEmailDto) {
        const { email , code} = body

        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: false }
            },
            options: {
                populate: {
                    path: "otp",
              
                }
            }
        })

        if (!user) {
            throw new ForbiddenException("User is not found")
        }

        if(!Compare({plainText: code, cipherText: (user.otp as any)[0].code})){
            throw new BadRequestException("Invalid code")
        }

        user.confirmed = true
        await user.save()
        await this.otpRepo.deleteOne({filter: {createdBy: user._id}})

     
        return { message: "Email is confirmed successfully" ,user }
    }

    // login method 
    async login(body: loginDto) {
        const { email , password} = body

        const user = await this.userRepo.findOne({
            filter: {
                email,
                confirmed: { $exists: true }
            },
            options: {
                populate: {
                    path: "otp",
              
                }
            }
        })

        if (!user) {
            throw new ForbiddenException("User is not found")
        }

        if(!await Compare({plainText: password, cipherText:user.password})){
            throw new BadRequestException("Invalid code")
        }
       
        const accessToken = await this.jwtService.signAsync(
         { userId: user._id },
            {
                secret: user.role === userRole.USER ? process.env.SECRET_USER_TOKEN! : process.env.SECRET_ADMIN_TOKEN!,
                expiresIn: "1y"
            }
        )
        const refreshToken = await this.jwtService.signAsync(
            { userId: user._id },
            {
                secret: user.role === userRole.USER ? process.env.REFRESH_SECRET_USER_TOKEN! : process.env.REFRESH_SECRET_ADMIN_TOKEN!,
                expiresIn: "1y"
            }
        )

        // const accessToken = await GenerateToken({
        //     payload: { userId: user._id },
        //     secret: user.role === userRole.USER ? process.env.SECRET_USER_TOKEN! : process.env.SECRET_ADMIN_TOKEN!,
        //     options: { expiresIn: "1y" }
        // })
        // const refreshToken = await GenerateToken({
        //     payload: { userId: user._id },
        //     secret: user.role === userRole.USER ? process.env.REFRESH_SECRET_USER_TOKEN! : process.env.REFRESH_SECRET_ADMIN_TOKEN!,
        //     options: { expiresIn: "1y" }
        // })

     
        return { message: "user logged in successfully" ,accessToken ,refreshToken }
    }

}
