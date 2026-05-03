import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(100),
  whatsapp: z.string(),
  email: z.string().email(),
  city: z.enum(["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Other"]),
  business_type: z.enum(["salon_parlour", "restaurant_cafe", "clinic_medical", "shop_retail", "other"]),
  has_website: z.enum(["none", "social_only", "yes"]),
  plan_interest: z.enum(["starter", "complete", "not_sure"]),
  timeline: z.enum(["this_week", "this_month", "exploring"]),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Save to Database
    const consultation = await prisma.consultation.create({
      data: {
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        city: data.city,
        businessType: data.business_type,
        hasWebsite: data.has_website,
        planInterest: data.plan_interest,
        timeline: data.timeline,
      },
    });

    // Send notifications
    if (process.env.RESEND_API_KEY) {
      // 1. Admin Alert
      await resend.emails.send({
        from: "DevClyst Leads <onboarding@resend.dev>",
        to: "lodhihasnain70@gmail.com",
        subject: `New Lead: ${data.name} (${data.business_type})`,
        text: `Name: ${data.name}\nWhatsApp: ${data.whatsapp}\nEmail: ${data.email}\nCity: ${data.city}\nPlan: ${data.plan_interest}\nTimeline: ${data.timeline}`,
      });

      // 2. User Confirmation (BCC Admin)
      await resend.emails.send({
        from: "DevClyst <onboarding@resend.dev>",
        to: data.email,
        bcc: "lodhihasnain70@gmail.com",
        subject: "Consultation Booked — DevClyst",
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0D9488;">Assalam o Alaikum ${data.name},</h2>
            <p>Your consultation with DevClyst has been booked successfully.</p>
            <p><strong>Package Interest:</strong> ${data.plan_interest.toUpperCase()}</p>
            <p>Our team will contact you on WhatsApp (+92 370 4640009) shortly to confirm the call time.</p>
            <br />
            <p>Best regards,</p>
            <p><strong>Team DevClyst</strong></p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, name: data.name });
  } catch (error) {
    console.error("API error", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
