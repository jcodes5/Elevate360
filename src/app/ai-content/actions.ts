'use server';

import { generateMarketingContentSuggestions, type GenerateMarketingContentSuggestionsInput, type GenerateMarketingContentSuggestionsOutput } from '@/ai/flows/generate-marketing-content-suggestions';
import { z } from 'zod';

const FormSchema = z.object({
  prompt: z.string().min(10).max(500),
});

interface ActionResult {
  suggestions?: string[];
  error?: string;
}

export async function generateSuggestions(input: { prompt: string }): Promise<ActionResult> {
  const validatedFields = FormSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Prompt must be between 10 and 500 characters.',
    };
  }
  
  const aiInput: GenerateMarketingContentSuggestionsInput = {
    prompt: validatedFields.data.prompt,
  };

  try {
    const output: GenerateMarketingContentSuggestionsOutput = await generateMarketingContentSuggestions(aiInput);
    return { suggestions: output.suggestions };
  } catch (error) {
    console.error('AI suggestion generation failed:', error);
    return { error: 'Failed to generate suggestions. Please try again later.' };
  }
}
