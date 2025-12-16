"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
const fs_1 = require("fs");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const crypto_1 = require("crypto");
const lib_storage_1 = require("@aws-sdk/lib-storage");
let S3Service = class S3Service {
    s3Client;
    constructor() {
        this.s3Client = new client_s3_1.S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    uploadFile = async ({ storeType = enums_1.storageTypeEnum.memory, Bucket = process.env.AWS_BUCKET_NAME, path, ACL = "private", file, }) => {
        const command = new client_s3_1.PutObjectCommand({
            Bucket,
            ACL,
            Key: `${process.env.APPLICATION_NAME}/${path}/${Date.now()}_${file.originalname}`,
            Body: storeType === enums_1.storageTypeEnum.memory ? file.buffer : (0, fs_1.createReadStream)(file.path),
            ContentType: file.mimetype,
        });
        await this.s3Client.send(command);
        if (!command.input.Key) {
            throw new common_1.BadRequestException("File upload failed");
        }
        return command.input.Key;
    };
    uploadLargeFile = async ({ storeType = enums_1.storageTypeEnum.disk, Bucket = process.env.AWS_BUCKET_NAME, path = "general", ACL = "private", file, }) => {
        const upload = new lib_storage_1.Upload({
            client: this.s3Client,
            params: {
                Bucket,
                ACL,
                Key: `${process.env.APPLICATION_NAME}/${path}/${(0, crypto_1.randomUUID)()}_${file.originalname}`,
                Body: storeType === enums_1.storageTypeEnum.memory ? file.buffer : (0, fs_1.createReadStream)(file.path),
                ContentType: file.mimetype,
            },
        });
        upload.on("httpUploadProgress", (progress) => {
        });
        const { Key } = await upload.done();
        if (!Key) {
            throw new common_1.BadRequestException("File upload failed");
        }
        return Key;
    };
    uploadFiles = async ({ storeType = enums_1.storageTypeEnum.memory, Bucket = process.env.AWS_BUCKET_NAME, path = "general", ACL = "private", files, useLarge = false, }) => {
        let urls = [];
        if (useLarge == true) {
            urls = await Promise.all(files.map(file => this.uploadLargeFile({ storeType, Bucket, path, ACL, file })));
        }
        else {
            urls = await Promise.all(files.map(file => this.uploadFile({ storeType, Bucket, path, ACL, file })));
        }
        return urls;
    };
    createUploadFilePresignedUrl = async ({ Bucket = process.env.AWS_BUCKET_NAME, path = "general", OriginalName, ContentType, expiresIn = 60 * 60 }) => {
        const Key = `${process.env.APPLICATION_NAME}/${path}/${(0, crypto_1.randomUUID)()}_${OriginalName}`;
        const command = new client_s3_1.PutObjectCommand({
            Bucket,
            Key,
            ContentType,
        });
        const url = await (0, s3_request_presigner_1.getSignedUrl)(this.s3Client, command, { expiresIn });
        return { url, Key };
    };
    getFile = async ({ Bucket = process.env.AWS_BUCKET_NAME, path, }) => {
        const command = new client_s3_1.GetObjectCommand({
            Bucket,
            Key: path,
        });
        return await this.s3Client.send(command);
    };
    createGetFilePresignedUrl = async ({ Bucket = process.env.AWS_BUCKET_NAME, Key, expiresIn = 60 * 5, downLoadName, }) => {
        const command = new client_s3_1.GetObjectCommand({
            Bucket,
            Key,
            ResponseContentDisposition: downLoadName ? `attachment; filename="${downLoadName}"` : undefined,
        });
        const url = await (0, s3_request_presigner_1.getSignedUrl)(this.s3Client, command, { expiresIn });
        return url;
    };
    deleteFile = async ({ Bucket = process.env.AWS_BUCKET_NAME, Key, }) => {
        const command = new client_s3_1.DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key,
        });
        return await this.s3Client.send(command);
    };
    deleteFiles = async ({ Bucket = process.env.AWS_BUCKET_NAME, urls, Quiet = false, }) => {
        const command = new client_s3_1.DeleteObjectsCommand({
            Bucket,
            Delete: {
                Objects: urls.map(url => ({ Key: url })),
                Quiet,
            }
        });
        return await this.s3Client.send(command);
    };
    listFiles = async ({ Bucket = process.env.AWS_BUCKET_NAME, path, }) => {
        const command = new client_s3_1.ListObjectsV2Command({
            Bucket,
            Prefix: `${process.env.APPLICATION_NAME}/${path}`
        });
        return await this.s3Client.send(command);
    };
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=s3.service.js.map