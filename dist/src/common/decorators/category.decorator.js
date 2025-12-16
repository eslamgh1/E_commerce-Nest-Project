"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdsMongo = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
let IdsMongo = class IdsMongo {
    validate(ids, args) {
        return ids.filter(id => mongoose_1.Types.ObjectId.isValid(id)).length === ids.length;
    }
    defaultMessage(args) {
        return ` id is not valid ${args.constraints[0]} `;
    }
};
exports.IdsMongo = IdsMongo;
exports.IdsMongo = IdsMongo = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IdsMongo', async: false })
], IdsMongo);
//# sourceMappingURL=category.decorator.js.map