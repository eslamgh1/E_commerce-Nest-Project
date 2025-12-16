import { TokenTypeEnum, userRole } from 'src/common';
export declare function Auth({ typeToken, role }?: {
    typeToken?: TokenTypeEnum;
    role?: userRole[];
}): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
