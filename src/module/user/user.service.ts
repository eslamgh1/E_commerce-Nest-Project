import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserRepo } from 'src/DB';
import { userGender } from 'src/common/enums';



@Injectable()
export class UserService {
constructor(private readonly userRepo:UserRepo){}

// signUp method is used to register a new user
    async signUp(body:UserDto){
        const {fName , lName, email, password , age  , gender } = body

        const userExist = await this.userRepo.findOne({filter :     email})
        if(userExist){
            throw new BadRequestException("User already exists")
        }

        const user = this.userRepo.create({
            email,
            password,
            age,
            fName,
            lName,
            gender : gender ? (gender as userGender) : userGender.MALE
        })

        if(!user){
            throw new BadRequestException("User not created")
        }

        return user

    }

    // =================    End line of class UserService ===========================//
    
}
