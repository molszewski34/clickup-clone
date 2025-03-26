import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import InvitationToWorkspace from "@/app/emails/InvitationToWorkspace";
export async function POST(request: Request) {
  const body = await request.json();

  const emailHtml = await render(
    InvitationToWorkspace({
      userFullName: body.userFullName,
      userEmail: body.userEmail,
      name: body.workspaceName,
    })
  );

  const message = {
    from: `Clickup clone <${process.env.EMAIL_FROM}>`,
    to: body.email,
    subject: `Join ${body.userFullName} Workspace`,
    html: emailHtml,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
