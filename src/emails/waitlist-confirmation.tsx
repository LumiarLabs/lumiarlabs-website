import {
  Body,
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

interface WaitlistConfirmationEmailProps {
  name: string;
  waitlistPosition: number;
}

export const WaitlistConfirmationEmail = ({
  name,
  waitlistPosition,
}: WaitlistConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the LumiPact Beta Waitlist! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to LumiPact!</Heading>
        
        <Text style={text}>Hi {name},</Text>
        
        <Text style={text}>
          You're officially on the waitlist for LumiPact! You're{' '}
          <strong>#{waitlistPosition}</strong> in line.
        </Text>

        <Section style={highlightBox}>
          <Text style={highlightText}>
            <strong>What happens next?</strong>
          </Text>
          <Text style={highlightText}>
            → We'll email you when beta testing begins<br />
            → You'll get early access before the public launch<br />
            → Your feedback will shape our product
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          Questions? Just reply to this email.<br />
          <br />
          - The LumiarLabs Team
        </Text>
      </Container>
    </Body>
  </Html>
);

WaitlistConfirmationEmail.PreviewProps = {
  name: 'John Doe',
  waitlistPosition: 47,
} as WaitlistConfirmationEmailProps;

export default WaitlistConfirmationEmail;

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
