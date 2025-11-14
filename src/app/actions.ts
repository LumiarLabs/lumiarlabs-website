'use server';

import { summarizeComplianceRequirements, SummarizeComplianceRequirementsInput } from '@/ai/flows/summarize-compliance-requirements';
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
