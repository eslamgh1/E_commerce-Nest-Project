import { ValidationOptions } from 'class-validator';
export declare function AtLeastOne(requiredFields: string[], validationOptions?: ValidationOptions): (constructor: Function) => void;
