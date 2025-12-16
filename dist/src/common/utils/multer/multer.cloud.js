"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerCloud = void 0;
const multer_1 = __importDefault(require("multer"));
const common_1 = require("@nestjs/common");
const enums_1 = require("../../enums");
const multer_validation_1 = require("./multer.validation");
const os_1 = __importDefault(require("os"));
const multerCloud = ({ fileType = multer_validation_1.fileValidation.image, storageType = enums_1.storageTypeEnum.memory, }) => {
    return {
        storage: storageType === enums_1.storageTypeEnum.memory ? multer_1.default.memoryStorage() : multer_1.default.diskStorage({
            destination: os_1.default.tmpdir(),
            filename(req, file, cb) {
                cb(null, `${Date.now()}_${file.originalname}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (fileType.includes(file.mimetype)) {
                (cb(null, true));
            }
            else
                return cb(new common_1.BadRequestException('Invalid file type'));
        }
    };
};
exports.multerCloud = multerCloud;
//# sourceMappingURL=multer.cloud.js.map