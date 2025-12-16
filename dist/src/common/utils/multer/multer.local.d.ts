import multer from 'multer';
import type { Request } from 'express';
export declare const multerLocal: ({ fileTypes }: {
    fileTypes?: string[];
}) => {
    storage: multer.StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => void;
    limits: {
        fileSize: number;
    };
};
