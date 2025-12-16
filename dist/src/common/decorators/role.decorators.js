"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.roleName = void 0;
const common_1 = require("@nestjs/common");
exports.roleName = "access_roles";
const Role = (access_roles) => {
    return (0, common_1.SetMetadata)(exports.roleName, access_roles);
};
exports.Role = Role;
//# sourceMappingURL=role.decorators.js.map