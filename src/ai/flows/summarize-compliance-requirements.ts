'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing compliance requirements based on industry.
 *
 * - summarizeComplianceRequirements - An async function that takes an industry as input and returns a summarized list of key regulatory requirements.
 * - SummarizeComplianceRequirementsInput - The input type for the summarizeComplianceRequirements function.
 * - SummarizeComplianceRequirementsOutput - The return type for the summarizeComplianceRequirements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeComplianceRequirementsInputSchema = z.object({
  industry: z
    .string()
    .describe('The industry for which to summarize compliance requirements.'),
});
export type SummarizeComplianceRequirementsInput = z.infer<
  typeof SummarizeComplianceRequirementsInputSchema
>;

const SummarizeComplianceRequirementsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summarized list of key regulatory requirements for the specified industry.'),
});
export type SummarizeComplianceRequirementsOutput = z.infer<
  typeof SummarizeComplianceRequirementsOutputSchema
>;

export async function summarizeComplianceRequirements(
  input: SummarizeComplianceRequirementsInput
): Promise<SummarizeComplianceRequirementsOutput> {
  return summarizeComplianceRequirementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeComplianceRequirementsPrompt',
  input: {schema: SummarizeComplianceRequirementsInputSchema},
  output: {schema: SummarizeComplianceRequirementsOutputSchema},
  prompt: `You are an AI compliance assistant. Summarize the key regulatory requirements for the following industry: {{{industry}}}.`,
});

const summarizeComplianceRequirementsFlow = ai.defineFlow(
  {
    name: 'summarizeComplianceRequirementsFlow',
    inputSchema: SummarizeComplianceRequirementsInputSchema,
    outputSchema: SummarizeComplianceRequirementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
