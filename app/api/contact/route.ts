import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
  company: z.string().max(0).optional(), // Honeypot
});

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    
    // Rate limiting logic
    const limit = rateLimitMap.get(ip);
    if (limit) {
      if (now - limit.lastReset > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      } else if (limit.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      } else {
        limit.count += 1;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await req.json();
    const validatedData = contactFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, company } = validatedData.data;

    // Honeypot check
    if (company) {
      console.log("Spam detected via honeypot field.");
      return NextResponse.json({ success: true, message: "Message sent!" }, { status: 200 });
    }

    // Send email to Aditya
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "aditya.prakash.devlop@gmail.com",
      subject: `New Portfolio Contact: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #c8ff00; background: #0a0a0a; padding: 10px; border-radius: 5px;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 10px; color: #999;">Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend Error:", emailError);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    // Auto-reply to submitter
    await resend.emails.send({
      from: "Aditya Prakash <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out! — Aditya Prakash",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0a0a0a;">Hi ${name},</h2>
          <p>Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
          <p>Best regards,<br/><strong>Aditya Prakash</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 10px; color: #999;"><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #c8ff00;">adityaprakash.dev</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
