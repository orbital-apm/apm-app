import { Body, Container, Head, Hr, Html, Link, Preview, Section, Text, Button } from '@react-email/components';
import * as React from 'react';

interface ListingEmailProps {
  senderEmail: string;
  receiverEmail: string;
  listing: string;
  enquiry: string;
  message: string;
  listingLink: string;
}

export const listingInquiry = ({
  listingLink,
  senderEmail,
  receiverEmail,
  message,
  enquiry,
  listing
}: ListingEmailProps) => (
  <Html>
    <Head />
    <Preview>Someone is interested in your listing!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>
          <strong>{receiverEmail}</strong>, it looks like someone is interested in your listing!
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{senderEmail}</strong>!
          </Text>
          <Text style={text}>Someone recently left a message about your listing:</Text>
          <Text style={text}>
            <strong>{listing}</strong>
          </Text>
          <Hr></Hr>
          <Text style={text}>
            <strong>From:</strong> {senderEmail}
          </Text>
          <Text style={text}>
            <strong>To:</strong> {receiverEmail}
          </Text>
          <Text style={paragraph}>
            <strong>Message:</strong>
          </Text>
          <Text style={msg}>{message}</Text>
          <Button
            href={listingLink}
            style={{ background: '#000000', color: '#ffffff', padding: '12px 20px', borderRadius: '12px' }}
          >
            View your listing
          </Button>
        </Section>
        <Text style={footer}>actions per minute.</Text>
        <Text style={footer}>
          <Link href='https://actions-per-minute.netlify.app/' style={link}>
            {' '}
            build your keyboards here.
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

listingInquiry.PreviewProps = {
  senderEmail: 'monluphone@gmail.com',
  receiverEmail: 'orbital-apm@outlook.com',
  listing: 'Epomaker V2 Urban',
  listingLink: 'https://actions-per-minute.netlify.app/builder',
  enquiry: 'Test',
  message: 'Hello!'
} as ListingEmailProps;

export default listingInquiry;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px'
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25
};

const section = {
  padding: '24px',
  border: 'solid 15px #71B084',
  borderRadius: '5px',
  textAlign: 'center' as const
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const
};

const paragraph = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const
};

const msg = {
  margin: '0 0 20px 0',
  textAlign: 'center' as const
};

const link = {
  color: '#0366d6',
  fontSize: '12px'
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px'
};
