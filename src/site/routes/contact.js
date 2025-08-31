import nodemailer from 'nodemailer';

const createTransport = () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE === 'true'),
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
  }
  return {
    sendMail: async (opts) => {
      // eslint-disable-next-line no-console
      console.log('[Email Fallback] Not configured. Email contents:', opts);
      return { messageId: 'dev-fallback' };
    },
  };
};

export const submitContactForm = async (req, res) => {
  const { name, email, phone, paymentMethod, details } = req.body;
  const transporter = createTransport();
  const to = process.env.CONTACT_TO || 'example@gmail.com';

  const subject = `New Inquiry — ${name || 'Prospective Client'}`;
  const text = `Contact Submission\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || ''}\n` +
    `Preferred Payment: ${paymentMethod || ''}\n\n` +
    `Message:\n${details || ''}`;

  try {
    await transporter.sendMail({
      to,
      from: process.env.FROM_EMAIL || 'website@localhost',
      replyTo: email || undefined,
      subject,
      text,
    });
    res.render('contact', { title: 'Contact', success: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Email error', err);
    res.status(500).render('contact', { title: 'Contact', error: true });
  }
};

