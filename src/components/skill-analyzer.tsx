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
    .min(50, "Por favor, proporciona un resumen de perfil más detallado (mínimo 50 caracteres).")
    .max(2000, "El resumen del perfil no puede exceder los 2000 caracteres."),
  resume: z
    .string()
    .min(100, "Por favor, pega un currículum más detallado (mínimo 100 caracteres).")
    .max(5000, "El texto del currículum no puede exceder los 5000 caracteres."),
  linkedInActivity: z
    .string()
    .max(2000, "La actividad de LinkedIn no puede exceder los 2000 caracteres.")
    .optional(),
});

const profilePlaceholder = `Ejemplo: Desarrollador Full-Stack con 2 años de experiencia. Apasionado por la tecnología y el desarrollo de software. Me especializo en crear aplicaciones web robustas y escalables, con un fuerte enfoque en la experiencia de usuario y el código limpio.`;
const resumePlaceholder = `(Pega el texto de tu currículum aquí...)\n\nNICOLÁS SANDOVAL\nDesarrollador Full-Stack\n(123) 456-7890 | nico.sandoval@email.com | linkedin.com/in/nicolas-sandoval-developer\n\nRESUMEN\nUn desarrollador motivado con experiencia en la creación de aplicaciones web, desde el frontend hasta el backend...`;

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
        title: "Análisis Fallido",
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
            Analizador de Habilidades con IA
          </CardTitle>
          <CardDescription className="text-lg">
            Identifica brechas y obtén sugerencias personalizadas para mejorar.
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
                    <FormLabel className="text-lg">Resumen de Perfil</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={profilePlaceholder}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Un breve resumen de tu LinkedIn o portafolio.
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
                    <FormLabel className="text-lg">Texto del Currículum</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={resumePlaceholder}
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Pega el contenido completo de tu currículum.
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
                      Actividad Reciente en LinkedIn (Opcional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: 'Comenté en una publicación sobre avances en machine learning.' o 'Compartí un artículo sobre nuevas funciones en Next.js 14.'"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Comparte algunos ejemplos de tus publicaciones, comentarios o artículos recientes.
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
                      Analizando...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analizar Mis Habilidades
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>

          {analysis && (
            <div className="mt-12 space-y-8">
              <h3 className="text-center font-headline text-2xl font-bold text-primary">
                Resultados del Análisis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ResultCard
                  icon={<Search className="w-6 h-6" />}
                  title="Habilidades Faltantes"
                  items={analysis.missingSkills}
                />
                <ResultCard
                  icon={<ListChecks className="w-6 h-6" />}
                  title="Habilidades por Desarrollar"
                  items={analysis.underdevelopedSkills}
                />
                <ResultCard
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="Sugerencias de Mejora"
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
          <p className="text-muted-foreground">Ninguna identificada.</p>
        )}
      </CardContent>
    </Card>
  );
}
