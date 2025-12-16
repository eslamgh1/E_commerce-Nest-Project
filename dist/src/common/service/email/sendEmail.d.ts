import Mail from "nodemailer/lib/mailer";
export declare const sendEmail: (mailOptions: Mail.Options) => Promise<void>;
export declare const generateOTP: () => number;
