"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventEmitter = void 0;
const events_1 = require("events");
const sendEmail_1 = require("./sendEmail");
const emailTemplate_1 = require("./emailTemplate");
const enums_1 = require("../../enums");
exports.eventEmitter = new events_1.EventEmitter();
exports.eventEmitter.on(enums_1.otpTypeEnum.CONFIRM_EMAIL, async (data) => {
    const { email, otp } = data;
    await (0, sendEmail_1.sendEmail)({
        to: email,
        subject: enums_1.otpTypeEnum.CONFIRM_EMAIL,
        html: (0, emailTemplate_1.emailTemplate)(otp, enums_1.otpTypeEnum.CONFIRM_EMAIL),
    });
});
exports.eventEmitter.on(enums_1.otpTypeEnum.FORGET_PASSWORD, async (data) => {
    const { email, otp } = data;
    await (0, sendEmail_1.sendEmail)({
        to: email,
        subject: enums_1.otpTypeEnum.FORGET_PASSWORD,
        html: (0, emailTemplate_1.emailTemplate)(otp, enums_1.otpTypeEnum.FORGET_PASSWORD),
    });
});
//# sourceMappingURL=email.events.js.map