import { Body, Controller, Get, Patch, Post, Query, Request, ValidationPipe } from '@nestjs/common';
import { confirmEmailDto, loginDto, ResendOtpDto, UserDto } from '../dto/user.dto';
import { UserService } from './user.service';
import type { UserWithRequest } from 'src/common/interfaces';




@Controller('users')
export class UserController {
    //userDto is a class that is used to validate the data that is sent to the server
    constructor(private readonly userService: UserService) { }

    //signUp method is used to register a new user
    @Post("signup")
    async signUp(@Body() body: UserDto) {
        // Await the service method (since it's async)
        return await this.userService.signUp(body);
    }

    //resendOtp method is used to resend the otp to the user
    @Post("resendotp")
    async resendOtp(@Body() body: ResendOtpDto) {

        return await this.userService.ResendOtp(body);
    }

    @Patch("confirmemail")
    async confirmEmail(@Body() body: confirmEmailDto) {

        return await this.userService.confirmEmail(body);
    }
    @Post("login")
    async login(@Body() body: loginDto) {
        return await this.userService.login(body);
    }

    @Get("profile")
    profile(
        @Request() req: UserWithRequest
    ) {
    // console.log({req})

        return { message: "profile" , user: req.user }
    }

}
