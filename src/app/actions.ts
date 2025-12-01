'use server';

import { summarizeComplianceRequirements, SummarizeComplianceRequirementsInput } from '@/ai/flows/summarize-compliance-requirements';
import { sql } from '@vercel/postgres';
import { resend } from '@/lib/resend';
import WaitlistConfirmationEmail from '@/emails/waitlist-confirmation';
import { z } from 'zod';

const ComplianceSchema = z.object({
  industry: z.string().min(3, { message: "Industry must be at least 3 characters long." }),
});

export async function getComplianceSummary(prevState: any, formData: FormData) {
  const validatedFields = ComplianceSchema.safeParse({
    industry: formData.get('industry'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid industry provided.',
      errors: validatedFields.error.flatten().fieldErrors,
      summary: '',
    };
  }

  try {
    const input: SummarizeComplianceRequirementsInput = {
      industry: validatedFields.data.industry,
    };
    const result = await summarizeComplianceRequirements(input);
    return {
      message: 'Success',
      errors: {},
      summary: result.summary,
    };
  } catch (error) {
    return {
      message: 'Failed to generate compliance summary. Please try again.',
      errors: {},
      summary: '',
    };
  }
}

// Waitlist schema validation
const WaitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
  // Validate form data
  const validatedFields = WaitlistSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email } = validatedFields.data;

  try {
    // Check if email already exists
    const existingUser = await sql`
      SELECT email FROM waitlist WHERE email = ${email}
    `;

    if (existingUser.rows.length > 0) {
      return {
        success: false,
        message: 'This email is already on the waitlist!',
        errors: {},
      };
    }

    // Get current count for waitlist position
    const countResult = await sql`
      SELECT COUNT(*) as count FROM waitlist
    `;
    const waitlistPosition = parseInt(countResult.rows[0].count) + 1;

    // Insert new waitlist entry
    await sql`
      INSERT INTO waitlist (name, email, waitlist_position, confirmation_sent)
      VALUES (${name}, ${email}, ${waitlistPosition}, true)
    `;

    // Send confirmation email
    try {
      await resend.emails.send({
        from: 'LumiarLabs <onboarding@resend.dev>', // Change to your verified domain
        to: email,
        subject: 'Welcome to the LumiPact Beta Waitlist! 🎉',
        react: WaitlistConfirmationEmail({ name, waitlistPosition }),
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the entire operation if email fails
    }

    return {
      success: true,
      message: `Welcome aboard! You're #${waitlistPosition} on the waitlist.`,
      errors: {},
    };
  } catch (error) {
    console.error('Waitlist error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
      errors: {},
    };
  }
}
