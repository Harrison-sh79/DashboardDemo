import { render } from "@react-email/render";
import WelcomeEmail from "@/components/email/mail";
import { sendEmail } from "@/components/email/nodemail";
import { redirect } from "next/navigation";


export async function POST(request: Request) {
  
  console.log("send email start.......");
  try {
    const body = await request.json();
    if (body) {
      const { to, cc, bcc, subject, html, style } = body;
      const email = {
        to,
        cc,
        bcc,
        subject,
        html: render(WelcomeEmail({ content: html, style: style }), { pretty: true }),
      };
      const result = await sendEmail(email);
      return Response.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json(
      { error: "Email sent failed, please check mail address" },
      { status: 400 }
    );
  }
}
