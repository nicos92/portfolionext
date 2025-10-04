import Image from "next/image";
import { Github } from "lucide-react";

import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {project.image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                />
            </div>
        )}
        <CardDescription className="div">
          <p><strong>Problema:</strong> {project.description.problem}</p>
          <p><strong>Solución:</strong> {project.description.solution}</p>
          <p><strong>Stack:</strong> {project.description.stack}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 text-secondary-foreground">
        <Button variant="secondary" asChild>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github />
            Ver Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

