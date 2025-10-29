
import { EventEmitter } from "events";
import { sendEmail } from "./sendEmail";
import { emailTemplate } from "./emailTemplate";


export const eventEmitter = new EventEmitter();

eventEmitter.on("confirmEmail", async (data) => {
  const { email, otp } = data;


  await sendEmail({
    to: email,
    subject: "Welcome to our app / Confirm your email",
    html: emailTemplate(otp as unknown as string, "Confirm your email"),

  })

})

eventEmitter.on("forgetPassword", async (data) => {
  const { email, otp } = data;


  await sendEmail({
    to: email,
    subject: "forget_Password",
    html: emailTemplate(otp as unknown as string, "Forget password"),

  })

})




