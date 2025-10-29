import { Body, Controller, Post, Query, ValidationPipe } from '@nestjs/common';
import { AdduserQueryDto, UserDto } from '../dto/user.dto';
import { UserService } from './user.service';
// import { ZodValidationPipe } from 'src/common/pipes';
// import { userSchema } from './user.validation';



@Controller('users')
export class UserController {
//userDto is a class that is used to validate the data that is sent to the server
constructor(private readonly userService: UserService){}



    @Post("signup")
    async signUp(@Body() body: UserDto) {
        // Await the service method (since it's async)
        return await this.userService.signUp(body);    
 
} 

}
