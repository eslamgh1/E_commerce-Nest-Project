import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenService } from '../service/token.services';
import { Reflector } from '@nestjs/core';
export declare class AuthunticationGuard implements CanActivate {
    private readonly tokenService;
    private reflector;
    constructor(tokenService: TokenService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
