"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles, Lightbulb, ListChecks, Search } from "lucide-react";
import type { AnalyzeSkillsOutput } from "@/ai/flows/analyze-skills-and-suggest-improvements";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getSkillAnalysis } from "@/app/actions";

const formSchema = z.object({
  profile: z
    .string()
    .min(50, "Please provide a more detailed profile summary (min 50 characters).")
    .max(2000, "Profile summary cannot exceed 2000 characters."),
  resume: z
    .string()
    .min(100, "Please paste a more detailed resume (min 100 characters).")
    .max(5000, "Resume text cannot exceed 5000 characters."),
  linkedInActivity: z
    .string()
    .max(2000, "LinkedIn activity cannot exceed 2000 characters.")
    .optional(),
});

const profilePlaceholder = `Example: Results-driven Data Analyst with 3 years of experience in the tech industry. Proficient in Python, SQL, and data visualization tools like Tableau. Passionate about uncovering insights from data to drive business growth and improve user experience.`;
const resumePlaceholder = `(Paste the text from your resume here...)\n\nJANE DOE\nData Analyst | Web Developer\n(123) 456-7890 | jane.doe@email.com | linkedin.com/in/janedoe\n\nSUMMARY\nA highly motivated Analyst with expertise in data extraction, modeling, and visualization, coupled with a strong foundation in web development...`;

export function SkillAnalyzer() {
  const [analysis, setAnalysis] = useState<AnalyzeSkillsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile: "",
      resume: "",
      linkedInActivity: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await getSkillAnalysis(values);
      setAnalysis(result);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="analyzer" className="w-full">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
            AI Skill Analyzer
          </CardTitle>
          <CardDescription className="text-lg">
            Identify gaps and get personalized suggestions for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="profile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Profile Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={profilePlaceholder}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A brief summary from your LinkedIn or portfolio.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Resume Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={resumePlaceholder}
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Paste the full text content of your resume.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedInActivity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Recent LinkedIn Activity (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'Commented on a post about advances in machine learning.' or 'Shared an article about new features in Next.js 14.'"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Share a few examples of your recent posts, comments, or
                      shared articles.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze My Skills
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>

          {analysis && (
            <div className="mt-12 space-y-8">
              <h3 className="text-center font-headline text-2xl font-bold text-primary">
                Analysis Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResultCard
                  icon={<Search className="w-6 h-6" />}
                  title="Missing Skills"
                  items={analysis.missingSkills}
                />
                <ResultCard
                  icon={<ListChecks className="w-6 h-6" />}
                  title="Underdeveloped Skills"
                  items={analysis.underdevelopedSkills}
                />
                <ResultCard
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="Improvement Suggestions"
                  items={analysis.suggestions}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

function ResultCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <Card className="bg-background">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="text-primary">{icon}</div>
        <CardTitle className="text-secondary-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">None identified.</p>
        )}
      </CardContent>
    </Card>
  );
}
