"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.tokenName = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
exports.tokenName = "typeToken";
const Token = (typeToken = enums_1.TokenTypeEnum.access) => {
    return (0, common_1.SetMetadata)(exports.tokenName, typeToken);
};
exports.Token = Token;
//# sourceMappingURL=token.decorator.js.map