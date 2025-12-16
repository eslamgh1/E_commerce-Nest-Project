"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const role_decorators_1 = require("./role.decorators");
const token_decorator_1 = require("./token.decorator");
const common_2 = require("@nestjs/common");
const guards_1 = require("../guards");
const authorization_gurds_1 = require("../guards/authorization.gurds");
const common_3 = require("..");
function Auth({ typeToken = common_3.TokenTypeEnum.access, role = [common_3.userRole.USER] } = {}) {
    return (0, common_1.applyDecorators)((0, token_decorator_1.Token)(typeToken), (0, role_decorators_1.Role)(role), (0, common_2.UseGuards)(guards_1.AuthunticationGuard, authorization_gurds_1.AuthorizationGuard));
}
//# sourceMappingURL=auth.decorators.js.map