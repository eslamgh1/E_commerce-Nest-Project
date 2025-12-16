"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = async (mailOptions) => {
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
        },
    });
    const info = await transporter.sendMail({
        from: `"SocialMediaApp" ${process.env.USER_EMAIL}`,
        ...mailOptions
    });
};
exports.sendEmail = sendEmail;
const generateOTP = () => {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=sendEmail.js.map