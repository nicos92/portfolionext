import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col md:flex-row items-center gap-8 py-20 px-4 md:px-6 rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/pexels-alohaphotostudio-10471895.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full">
        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary shadow-lg">
          <AvatarImage src="https://nicos92.github.io/CV-Nicolas-Sandoval/img/NSS.jpeg" alt="Nicolás Sandoval" />
          <AvatarFallback>NS</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Nicolás Salomón Sandoval
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-medium text-primary">
            Desarrollador de Aplicaciones y Analista TI | Especialista en .NET y C#
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Desarrollador de aplicaciones y Analista TI con 3+ años de experiencia transformando requisitos de negocio en soluciones de software eficientes. Mi especialidad es la automatización de procesos y el desarrollo backend con .NET y C#, con un fuerte enfoque en la creación de código limpio, escalable y mantenible.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-2">
            <Badge variant="secondary" className="text-sm text-secondary-foreground" >Desarrollo Web</Badge>
            <Badge variant="secondary" className="text-sm text-secondary-foreground">Full-Stack</Badge>
            <Badge variant="secondary" className="text-sm text-secondary-foreground">Bases de Datos</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
