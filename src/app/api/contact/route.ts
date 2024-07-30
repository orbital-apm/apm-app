import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Contact from '@/templates/contact';

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, enquiry, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'orbital-apm@outlook.com',
      reply_to: email,
      subject: `actions-per-minute Support: ${enquiry}`,
      react: Contact({ senderEmail: email, message, enquiry })
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
