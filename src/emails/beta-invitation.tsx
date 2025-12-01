import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface BetaInvitationEmailProps {
  name: string;
  accessUrl?: string;
}

export const BetaInvitationEmail = ({
  name,
  accessUrl = 'https://lumiarlabs.com',
}: BetaInvitationEmailProps) => (
  <Html>
    <Head />
    <Preview>LumiPact Beta is Live! Your Early Access Awaits 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>LumiPact is Live! 🚀</Heading>
        
        <Text style={text}>Hi {name},</Text>
        
        <Text style={text}>
          The wait is over! We're excited to give you early access to LumiPact beta.
        </Text>

        <Text style={text}>
          As one of our first users, your feedback will directly shape the future
          of our AI-powered contract platform.
        </Text>

        <Section style={buttonContainer}>
          <Button style={button} href={accessUrl}>
            Get Started Now
          </Button>
        </Section>

        <Section style={highlightBox}>
          <Text style={highlightText}>
            <strong>What to try first:</strong>
          </Text>
          <Text style={highlightText}>
            → Draft a contract using our AI Contract Studio<br />
            → Analyze agreements with our Plain-English Translator<br />
            → Explore our Template Library
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          We'd love to hear your thoughts! Reply to this email anytime.<br />
          <br />
          - The LumiarLabs Team
        </Text>
      </Container>
    </Body>
  </Html>
);

BetaInvitationEmail.PreviewProps = {
  name: 'John Doe',
  accessUrl: 'https://lumiarlabs.com',
} as BetaInvitationEmailProps;

export default BetaInvitationEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '40px 0',
  padding: '0 40px',
  textAlign: 'center' as const,
};

const text = {
  color: '#484848',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 40px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 40px',
};

const button = {
  backgroundColor: '#000000',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 40px',
};

const highlightBox = {
  backgroundColor: '#f0f7ff',
  borderRadius: '8px',
  margin: '24px 40px',
  padding: '20px',
};

const highlightText = {
  color: '#1d1c1d',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '8px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 40px',
};

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '24px 40px',
};
