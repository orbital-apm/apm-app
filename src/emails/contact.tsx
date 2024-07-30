import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

interface ContactEmailProps {
    senderEmail: string;
    enquiry: string;
    message: string;
}

export const Contact = ({
    senderEmail, message, enquiry
}: ContactEmailProps) => (
    <Html>
      <Head />
      <Preview>
        You have received an inquiry from someone!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={title}>
            <strong>orbital-apm@outlook.com</strong>, you have received an inquiry from someone.
          </Text>
  
          <Section style={section}>
            <Text style={text}>
              Hey <strong>actions-per-minute</strong> team!
            </Text>
            <Text style={text}>
              Someone recently left a message on your website.
            </Text>
            <Hr></Hr>
            <Text style={text}>
                <strong>From:</strong> {senderEmail}
            </Text>
            <Text style={text}>
            <strong>To:</strong> orbital-apm@outlook.com 
            </Text>
            <Text style={paragraph}>
                <strong>Enquiry:</strong> {enquiry}
            </Text>
            <Text style={paragraph} >
            <strong>Message:</strong>
            </Text>
            <Text style={msg}>
            {message}
            </Text>
          </Section>
          <Text style={footer}>
            actions-per-minute <Link href="https://actions-per-minute.netlify.app/" style={link}> build your keyboards here.</Link>
          </Text>
        </Container>
      </Body>
    </Html>
);

Contact.PreviewProps = {
    senderEmail: 'monluphone@gmail.com',
    message: 'Hello!',
    enquiry: 'Test'
  } as ContactEmailProps;
  

export default Contact;

const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
const title = {
    fontSize: "24px",
    lineHeight: 1.25,
  };
  
const section = {
    padding: "24px",
    border: "solid 15px #d7e5f0",
    borderRadius: "5px",
    textAlign: "center" as const,
  };
  
const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };

const paragraph = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };

const msg = {
    margin: "0 0 10px 0",
    textAlign: "center" as const,
}
  
const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
  };
  
const links = {
    textAlign: "center" as const,
  };
  
const link = {
    color: "#0366d6",
    fontSize: "12px",
  };
  
const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "60px",
  };
  