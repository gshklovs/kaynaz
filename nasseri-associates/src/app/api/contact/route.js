import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, payment, message } = await request.json();

  try {
    const transporter = maybeCreateTransport();
    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ""}\nPayment: ${payment || ""}\n\nMessage:\n${message}`;
    const to = process.env.CONTACT_TO || "example@gmail.com";

    if (transporter) {
      await transporter.sendMail({ from: process.env.MAIL_FROM || to, to, subject, text });
    } else {
      console.log("[contact] Would send mail:", { to, subject, text });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("[contact] Error:", err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

function maybeCreateTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
}

