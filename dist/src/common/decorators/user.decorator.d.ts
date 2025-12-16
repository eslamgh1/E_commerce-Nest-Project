import { ValidatorConstraintInterface, ValidationArguments, ValidationOptions } from 'class-validator';
export declare class MatchFields implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsMatch(constraints: string[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare const Userdecorator: (...dataOrPipes: unknown[]) => ParameterDecorator;
