import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";


const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 5175;

const {
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO = "eileendevc@gmail.com",
} = process.env;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn(
    "[email-server] Missing EMAIL_USER or EMAIL_PASS env vars. Configure them to enable sending."
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Basic validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const subject = `Portfolio contact - ${name}`;
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;

    if (!EMAIL_USER || !EMAIL_PASS) {
      return res.status(500).json({ error: "Email service not configured" });
    }

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject,
      text: body,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`[email-server] listening on http://localhost:${PORT}`);
});

