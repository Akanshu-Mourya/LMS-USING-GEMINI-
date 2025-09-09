import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER_EMAIL,     
    pass: process.env.USER_PASSWORD,   
  },
});

const sendMail = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to,
      subject: "Reset Your Password",
      html: `
        <p>Your OTP for password reset is <b>${otp}</b>.</p>
        <p>It will expire in <b>5 minutes</b>.</p>
      `,
    });

    console.log(`📩 OTP sent to ${to}`);
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    throw new Error("Failed to send email"); 
  }
};

export default sendMail;
