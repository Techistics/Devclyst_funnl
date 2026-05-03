import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1. Save to DB
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    // 2. Email to Admin
    await resend.emails.send({
      from: "DevClyst <onboarding@resend.dev>",
      to: "lodhihasnain70@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0D9488;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    // 3. Confirmation Email to User (BCC Admin so you get a copy)
    await resend.emails.send({
      from: "DevClyst <onboarding@resend.dev>",
      to: email,
      bcc: "lodhihasnain70@gmail.com",
      subject: "We've received your message — DevClyst",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0D9488;">Assalam o Alaikum ${name},</h2>
          <p>Thank you for reaching out to DevClyst.</p>
          <p>We have received your message regarding <strong>"${subject}"</strong> and our team is already reviewing it.</p>
          <p>You can expect a response from us within 15-30 minutes during business hours (9 AM - 9 PM PKT).</p>
          <br />
          <p>Best regards,</p>
          <p><strong>Team DevClyst</strong></p>
          <p style="font-size: 12px; color: #999;">WhatsApp: +92 370 4640009</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
