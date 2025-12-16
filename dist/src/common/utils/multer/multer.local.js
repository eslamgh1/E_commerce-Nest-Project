"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerLocal = void 0;
const multer_1 = __importDefault(require("multer"));
const common_1 = require("@nestjs/common");
const multerLocal = ({ fileTypes = [] }) => {
    return {
        storage: multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './uploads');
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '-' + file.originalname);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (fileTypes.includes(file.mimetype)) {
                cb(null, true);
            }
            else {
                cb(new common_1.BadRequestException('Invalid file type'));
            }
        },
        limits: {
            fileSize: 1024 * 1024 * 5,
        },
    };
};
exports.multerLocal = multerLocal;
//# sourceMappingURL=multer.local.js.map