// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { mailDataSchema, MailData } from "@/types/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Parse the request body as FormData
    const data: MailData = mailDataSchema.parse(req.body);

    // Your email sending logic here, using data.name, data.email, etc.
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your app password or regular password
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: "pauloportelamartins@gmail.com",
      subject: "PrismaWeb Website - New Message",
      text: `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\nMessage: ${data.message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
