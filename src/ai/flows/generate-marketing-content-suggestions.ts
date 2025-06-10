'use server';
/**
 * @fileOverview AI-powered tool that provides intelligent suggestions for content in the marketing campaigns.
 *
 * - generateMarketingContentSuggestions - A function that handles the marketing content generation process.
 * - GenerateMarketingContentSuggestionsInput - The input type for the generateMarketingContentSuggestions function.
 * - GenerateMarketingContentSuggestionsOutput - The return type for the generateMarketingContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingContentSuggestionsInputSchema = z.object({
  prompt: z
    .string()
    .describe("A topic or prompt for generating marketing content suggestions."),
});
export type GenerateMarketingContentSuggestionsInput = z.infer<typeof GenerateMarketingContentSuggestionsInputSchema>;

const GenerateMarketingContentSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe("A list of marketing content suggestions."),
});
export type GenerateMarketingContentSuggestionsOutput = z.infer<typeof GenerateMarketingContentSuggestionsOutputSchema>;

export async function generateMarketingContentSuggestions(input: GenerateMarketingContentSuggestionsInput): Promise<GenerateMarketingContentSuggestionsOutput> {
  return generateMarketingContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingContentSuggestionsPrompt',
  input: {schema: GenerateMarketingContentSuggestionsInputSchema},
  output: {schema: GenerateMarketingContentSuggestionsOutputSchema},
  prompt: `You are an AI marketing assistant. Generate 3 marketing content suggestions based on the following topic or prompt: {{{prompt}}}. Return them as a JSON array of strings.`,
});

const generateMarketingContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateMarketingContentSuggestionsFlow',
    inputSchema: GenerateMarketingContentSuggestionsInputSchema,
    outputSchema: GenerateMarketingContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
