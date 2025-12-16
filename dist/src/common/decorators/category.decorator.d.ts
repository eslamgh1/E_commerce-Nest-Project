import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IdsMongo implements ValidatorConstraintInterface {
    validate(ids: string[], args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
