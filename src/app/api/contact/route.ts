import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, payment, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST as string;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER as string;
    const pass = process.env.SMTP_PASS as string;
    const to = process.env.CONTACT_TO_EMAIL as string;
    const from = process.env.CONTACT_FROM_EMAIL || user;

    if (!host || !user || !pass || !to) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New inquiry from ${name}`;
    const text = `
New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || ""}
Preferred payment: ${payment || ""}

Message:
${message}
`;

    await transporter.sendMail({ to, from, subject, text });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

