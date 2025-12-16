import { AppService } from './app.service';
import type { Request, Response, NextFunction } from 'express';
import { S3Service } from './common/service/s3.service';
export declare class AppController {
    private readonly appService;
    private readonly s3Service;
    constructor(appService: AppService, s3Service: S3Service);
    getHello(body: object, params: object): string;
    GetFile(req: Request, res: Response, next: NextFunction): Promise<void>;
}
