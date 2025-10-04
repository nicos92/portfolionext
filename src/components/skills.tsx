import { SKILLS, SOFT_SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="w-full">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">
        Technical & Soft Skills
      </h2>
      <p className="mt-2 mb-12 text-center text-lg text-muted-foreground">
        A breakdown of my technical expertise and professional abilities.
      </p>
      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto">
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="technical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <SkillCard title="Expert" skills={SKILLS.expert} />
            <SkillCard title="Intermediate" skills={SKILLS.intermediate} />
            <SkillCard title="Familiar" skills={SKILLS.familiar} />
          </div>
        </TabsContent>
        <TabsContent value="soft">
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {SOFT_SKILLS.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-secondary-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
