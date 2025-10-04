'use server';

import { analyzeSkillsAndSuggestImprovements } from '@/ai/flows/analyze-skills-and-suggest-improvements';
import type {
  AnalyzeSkillsInput,
  AnalyzeSkillsOutput,
} from '@/ai/flows/analyze-skills-and-suggest-improvements';

export async function getSkillAnalysis(
  input: AnalyzeSkillsInput
): Promise<AnalyzeSkillsOutput> {
  try {
    // Add a small delay to simulate a real API call and show the loading state
    await new Promise(resolve => setTimeout(resolve, 1500));
    const result = await analyzeSkillsAndSuggestImprovements(input);
    return result;
  } catch (error) {
    console.error('Error in getSkillAnalysis:', error);
    throw new Error('Failed to analyze skills. The AI model may be temporarily unavailable. Please try again later.');
  }
}
