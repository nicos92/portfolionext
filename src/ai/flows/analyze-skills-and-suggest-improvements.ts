'use server';

/**
 * @fileOverview Analyzes a user's skills and suggests improvements based on their profile, resume, and LinkedIn activity.
 *
 * - analyzeSkillsAndSuggestImprovements - A function that analyzes skills and suggests improvements.
 * - AnalyzeSkillsInput - The input type for the analyzeSkillsAndSuggestImprovements function.
 * - AnalyzeSkillsOutput - The return type for the analyzeSkillsAndSuggestImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSkillsInputSchema = z.object({
  profile: z.string().describe('The user profile.'),
  resume: z.string().describe('The user resume.'),
  linkedInActivity: z.string().describe('The user LinkedIn activity.'),
});
export type AnalyzeSkillsInput = z.infer<typeof AnalyzeSkillsInputSchema>;

const AnalyzeSkillsOutputSchema = z.object({
  missingSkills: z.array(z.string()).describe('The missing skills.'),
  underdevelopedSkills: z.array(z.string()).describe('The underdeveloped skills.'),
  suggestions: z.array(z.string()).describe('The suggestions for improvement.'),
});
export type AnalyzeSkillsOutput = z.infer<typeof AnalyzeSkillsOutputSchema>;

export async function analyzeSkillsAndSuggestImprovements(
  input: AnalyzeSkillsInput
): Promise<AnalyzeSkillsOutput> {
  return analyzeSkillsAndSuggestImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSkillsAndSuggestImprovementsPrompt',
  input: {schema: AnalyzeSkillsInputSchema},
  output: {schema: AnalyzeSkillsOutputSchema},
  prompt: `You are a career advisor. Analyze the user's skills based on their profile, resume, and LinkedIn activity.

  Profile: {{{profile}}}
  Resume: {{{resume}}}
  LinkedIn activity: {{{linkedInActivity}}}

  Identify missing skills, underdeveloped skills, and provide suggestions for improvement.

  Missing skills:
  {{#each missingSkills}}- {{this}}
  {{/each}}

  Underdeveloped skills:
  {{#each underdevelopedSkills}}- {{this}}
  {{/each}}

  Suggestions:
  {{#each suggestions}}- {{this}}
  {{/each}}`,
});

const analyzeSkillsAndSuggestImprovementsFlow = ai.defineFlow(
  {
    name: 'analyzeSkillsAndSuggestImprovementsFlow',
    inputSchema: AnalyzeSkillsInputSchema,
    outputSchema: AnalyzeSkillsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
