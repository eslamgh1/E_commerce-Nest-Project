"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileTypeEnum = exports.storageTypeEnum = void 0;
var storageTypeEnum;
(function (storageTypeEnum) {
    storageTypeEnum["memory"] = "memory";
    storageTypeEnum["disk"] = "disk";
})(storageTypeEnum || (exports.storageTypeEnum = storageTypeEnum = {}));
var fileTypeEnum;
(function (fileTypeEnum) {
    fileTypeEnum["image"] = "image";
    fileTypeEnum["video"] = "video";
    fileTypeEnum["file"] = "file";
})(fileTypeEnum || (exports.fileTypeEnum = fileTypeEnum = {}));
//# sourceMappingURL=multer.enums.js.map