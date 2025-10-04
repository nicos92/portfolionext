import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="w-full">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">
        Formación Académica
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {EDUCATION.map((edu) => (
          <Card key={edu.title} className="flex flex-col">
            <CardHeader className="flex-row items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">{edu.title}</CardTitle>
                <CardDescription>{edu.institution} | {edu.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
