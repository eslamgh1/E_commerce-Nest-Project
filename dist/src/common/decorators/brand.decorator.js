"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtLeastOne = AtLeastOne;
const class_validator_1 = require("class-validator");
function AtLeastOne(requiredFields, validationOptions) {
    return function (constructor) {
        (0, class_validator_1.registerDecorator)({
            target: constructor,
            propertyName: "",
            options: validationOptions,
            constraints: requiredFields,
            validator: {
                validate(value, args) {
                    return requiredFields.some(field => args.object[field]);
                },
                defaultMessage(args) {
                    return `At least one of ${requiredFields.join(', ')} is missing`;
                }
            }
        });
    };
}
//# sourceMappingURL=brand.decorator.js.map