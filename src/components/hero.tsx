import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-8">
      <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary shadow-lg">
        <AvatarImage src="https://nicos92.github.io/CV-Nicolas-Sandoval/img/perfil.jpg" alt="Nicolás Sandoval" />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Nicolás Sandoval
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-medium text-secondary-foreground">
          Desarrollador Full-Stack
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Apasionado por la tecnología y el desarrollo de software. Me especializo en crear aplicaciones web robustas y escalables, con un fuerte enfoque en la experiencia de usuario y el código limpio.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-2">
          <Badge variant="secondary" className="text-sm">Desarrollo Web</Badge>
          <Badge variant="secondary" className="text-sm">Full-Stack</Badge>
          <Badge variant="secondary" className="text-sm">Bases de Datos</Badge>
        </div>
      </div>
    </section>
  );
}
