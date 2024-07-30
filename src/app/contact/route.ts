import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import Contact from '@/emails/contact';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_CONTACT_APIKEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method == 'POST') {
    const {email, message, enquiry} = req.body;
    
    try {
      const data = await resend.emails.send({
        from: 'monluphone@gmail.com',
        to: 'orbital-apm@outlook.com',
        subject: 'New Form Submission',
        react: Contact({senderEmail: email, message, enquiry})
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// export async function POST(request: Request) {
//     return Response.json({
//       data: null
//     });
//   }

// await resend.emails.send({
//   from: 'monluphone@gmail.com',
//   to: 'orbital-apm@outlook.com',
//   subject: 'Inquiry email from <Sender login email>',
//   react: Email(email ='orbital-apm@outlook.com', ),
// });