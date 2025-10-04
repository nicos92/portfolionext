import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="w-full">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">
        Portafolio
      </h2>
      <p className="mt-2 mb-12 text-center text-lg text-muted-foreground">
        Una selección de proyectos que demuestran mis habilidades en análisis y desarrollo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
