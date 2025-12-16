import multer from 'multer';
import type { Request } from 'express';
import { storageTypeEnum } from '../../enums';
export declare const multerCloud: ({ fileType, storageType, }: {
    fileType?: string[];
    storageType?: storageTypeEnum;
}) => {
    storage: multer.StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => any;
};
