import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import listingInquiry from '@/templates/listings';

const resend = new Resend(process.env.RESEND_CONTACT_API_KEY);

export async function POST(request: Request) {
  try {
    const { sellerEmail, senderEmail, listingTitle, listingLink, enquiry, message } = await request.json();

    const data = await resend.emails.send({
      from: 'APM Marketplace <onboarding@resend.dev>',
      to: sellerEmail,
      reply_to: senderEmail,
      subject: `For ${listingTitle}: ${enquiry}`,
      react: listingInquiry({
        receiverEmail: sellerEmail,
        senderEmail: senderEmail,
        listingTitle: listingTitle,
        listingLink: listingLink,
        message: message,
        enquiry: enquiry
      })
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
