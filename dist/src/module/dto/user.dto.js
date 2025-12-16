"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdduserQueryDto = exports.UserDto = exports.loginDto = exports.confirmEmailDto = exports.ResendOtpDto = void 0;
const class_validator_1 = require("class-validator");
const decorators_1 = require("../../common/decorators");
const enums_1 = require("../../common/enums");
class ResendOtpDto {
    email;
}
exports.ResendOtpDto = ResendOtpDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ResendOtpDto.prototype, "email", void 0);
class confirmEmailDto extends ResendOtpDto {
    code;
}
exports.confirmEmailDto = confirmEmailDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], confirmEmailDto.prototype, "code", void 0);
class loginDto extends ResendOtpDto {
    password;
}
exports.loginDto = loginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], loginDto.prototype, "password", void 0);
class UserDto extends loginDto {
    fName;
    lName;
    age;
    gender;
    cPassword;
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "fName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "lName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(15),
    (0, class_validator_1.Max)(95),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.userGender),
    __metadata("design:type", String)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((data) => {
        return Boolean(data.password);
    }),
    (0, decorators_1.IsMatch)(['password']),
    __metadata("design:type", String)
], UserDto.prototype, "cPassword", void 0);
class AdduserQueryDto {
    name;
}
exports.AdduserQueryDto = AdduserQueryDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'query name is required' }),
    __metadata("design:type", String)
], AdduserQueryDto.prototype, "name", void 0);
//# sourceMappingURL=user.dto.js.map