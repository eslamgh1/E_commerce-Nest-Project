"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRole = exports.userProvider = exports.userGender = void 0;
var userGender;
(function (userGender) {
    userGender["MALE"] = "male";
    userGender["FEMALE"] = "female";
})(userGender || (exports.userGender = userGender = {}));
var userProvider;
(function (userProvider) {
    userProvider["LOCAL"] = "local";
    userProvider["GOOGLE"] = "google";
    userProvider["FACEBOOK"] = "facebook";
})(userProvider || (exports.userProvider = userProvider = {}));
var userRole;
(function (userRole) {
    userRole["USER"] = "user";
    userRole["ADMIN"] = "admin";
})(userRole || (exports.userRole = userRole = {}));
//# sourceMappingURL=user.enums.js.map