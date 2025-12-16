export declare class ResendOtpDto {
    email: string;
}
export declare class confirmEmailDto extends ResendOtpDto {
    code: string;
}
export declare class loginDto extends ResendOtpDto {
    password: string;
}
export declare class UserDto extends loginDto {
    fName: string;
    lName: string;
    age: number;
    gender: string;
    cPassword: string;
}
export declare class AdduserQueryDto {
    name: string;
}
