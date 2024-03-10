import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  cc?: string;
  bcc?:string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.office365.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER || "harrison.sh79@outlook.com",
    pass: process.env.SMTP_PASSWORD || "Harrison&Tracy2012",
  },
  logger: true,
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  });
};
