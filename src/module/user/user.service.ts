import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { OtpRepo, UserRepo } from 'src/DB';
import { otpTypeEnum, userGender } from 'src/common/enums';
import { emailTemplate, generateOTP, sendEmail } from 'src/common';
import { Hash } from 'src/common/security/hash';



@Injectable()
export class UserService {
constructor(
    private readonly userRepo:UserRepo,
    private readonly otpRepo:OtpRepo
){}

// signUp method is used to register a new user
    async signUp(body:UserDto){
        const {fName , lName, email, password , age  , gender } = body

        const userExist = await this.userRepo.findOne({filter :{email}})
        if(userExist){
            throw new BadRequestException("User already exists")
        }

        const user = await this.userRepo.create({
            email,
            password: await Hash({plainText: password}),
            age,
            fName,
            lName,
            gender : gender ? (gender as userGender) : userGender.MALE
        })


        if(!user){
            throw new BadRequestException("User not created")
        }

        await sendEmail({
            to : email,
            subject : "Confirm your email",
           html : emailTemplate("12345", "Please confirm your email"),
        })
        await this.otpRepo.create({
            code:"12345",
            createdBy:user._id,
            type:otpTypeEnum.CONFIRM_EMAIL,
            expiresAt: new Date(Date.now() +  60 * 1000)
        })

        return user
    }



    // =================    End line of class UserService ===========================//
    
}
