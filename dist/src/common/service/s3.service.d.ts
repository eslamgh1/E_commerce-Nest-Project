import { ObjectCannedACL } from "@aws-sdk/client-s3";
import { storageTypeEnum } from "../enums";
export declare class S3Service {
    private readonly s3Client;
    constructor();
    uploadFile: ({ storeType, Bucket, path, ACL, file, }: {
        storeType?: storageTypeEnum;
        Bucket?: string;
        path: string | undefined;
        ACL?: ObjectCannedACL;
        file: Express.Multer.File;
    }) => Promise<string>;
    uploadLargeFile: ({ storeType, Bucket, path, ACL, file, }: {
        storeType?: storageTypeEnum;
        Bucket?: string;
        path: string | undefined;
        ACL?: ObjectCannedACL;
        file: Express.Multer.File;
    }) => Promise<string>;
    uploadFiles: ({ storeType, Bucket, path, ACL, files, useLarge, }: {
        storeType?: storageTypeEnum;
        Bucket?: string;
        path: string | undefined;
        ACL?: ObjectCannedACL;
        files: Express.Multer.File[];
        useLarge?: boolean;
    }) => Promise<string[]>;
    createUploadFilePresignedUrl: ({ Bucket, path, OriginalName, ContentType, expiresIn }: {
        path?: string;
        Bucket?: string;
        OriginalName: string;
        ContentType: string;
        expiresIn?: number;
    }) => Promise<{
        url: string;
        Key: string;
    }>;
    getFile: ({ Bucket, path, }: {
        Bucket?: string;
        path: string;
    }) => Promise<import("@aws-sdk/client-s3").GetObjectCommandOutput>;
    createGetFilePresignedUrl: ({ Bucket, Key, expiresIn, downLoadName, }: {
        Bucket?: string;
        Key: string;
        expiresIn?: number;
        downLoadName?: string | undefined;
    }) => Promise<string>;
    deleteFile: ({ Bucket, Key, }: {
        Bucket?: string;
        Key: string;
    }) => Promise<import("@aws-sdk/client-s3").DeleteObjectCommandOutput>;
    deleteFiles: ({ Bucket, urls, Quiet, }: {
        Bucket?: string;
        urls: string[];
        Quiet?: boolean;
    }) => Promise<import("@aws-sdk/client-s3").DeleteObjectsCommandOutput>;
    listFiles: ({ Bucket, path, }: {
        Bucket?: string;
        path: string;
    }) => Promise<import("@aws-sdk/client-s3").ListObjectsV2CommandOutput>;
}
