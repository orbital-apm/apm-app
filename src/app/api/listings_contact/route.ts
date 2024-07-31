import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import listingInquiry from '@/templates/listings';

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

export async function POST(request: Request) {
  try {
    const { senderEmail, receiverEmail, listing, enquiry, message, listingLink } = await request.json();

    const data = await resend.emails.send({
      from: 'APM Marketplace <onboarding@resend.dev>',
      to: receiverEmail,
      reply_to: senderEmail,
      subject: `For ${listing}: ${enquiry}`,
      react: listingInquiry({
        senderEmail,
        receiverEmail,
        listing,
        enquiry,
        message,
        listingLink
      })
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
