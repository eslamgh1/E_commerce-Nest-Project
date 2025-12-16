"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compare = exports.Hash = void 0;
const bcrypt_1 = require("bcrypt");
const Hash = async ({ plainText, saltRounds = Number(process.env.SALT_ROUNDS) }) => {
    return await (0, bcrypt_1.hash)(plainText, saltRounds);
};
exports.Hash = Hash;
const Compare = async ({ plainText, cipherText }) => {
    return await (0, bcrypt_1.compare)(plainText, cipherText);
};
exports.Compare = Compare;
//# sourceMappingURL=hash.js.map