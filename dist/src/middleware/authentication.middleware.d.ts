import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { TokenTypeEnum } from 'src/common';
import { UserWithRequest } from 'src/common/interfaces';
import { TokenService } from 'src/common/service/token.services';
export declare const tokenType: (typeToken?: TokenTypeEnum) => (req: UserWithRequest, res: Response, next: NextFunction) => void;
export declare class AuthenticationMiddleware implements NestMiddleware {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    use(req: UserWithRequest, res: Response, next: NextFunction): Promise<void>;
}
