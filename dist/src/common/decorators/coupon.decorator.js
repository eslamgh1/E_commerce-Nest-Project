"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponValidator = void 0;
const class_validator_1 = require("class-validator");
let couponValidator = class couponValidator {
    validate(value, args) {
        const obj = args.object;
        const fromDate = new Date(obj.fromDate);
        const toDate = new Date(obj.toDate);
        const now = new Date();
        return fromDate >= now && fromDate < toDate;
    }
    defaultMessage(args) {
        return ` fromDate is not valid , should be greater than today `;
    }
};
exports.couponValidator = couponValidator;
exports.couponValidator = couponValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'couponValidator', async: false })
], couponValidator);
//# sourceMappingURL=coupon.decorator.js.map