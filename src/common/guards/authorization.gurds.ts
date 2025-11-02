
import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Reflector } from '@nestjs/core';
import { userRole } from '../enums';
import { roleName } from '../decorators';

@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(
        private reflector: Reflector
    ) { }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
       
        try {
             //get request
            const req = context.switchToHttp().getRequest();

            //get access roles
            const access_roles : userRole[] = this.reflector.get(roleName, context.getHandler());

            console.log({ access_roles });

            if (!access_roles.includes(req.user.role)) {
                throw new BadRequestException("You are not authorized");
            }
            return true;
//ch erro msg
        } catch (error: any) {
            throw new BadRequestException(error.message);
        }


    }
}

