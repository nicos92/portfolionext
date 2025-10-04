import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="w-full">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">
        Experiencia Profesional
      </h2>
      <div className="mt-12 flex justify-center">
        <Card className="max-w-3xl w-full">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Analista de Sistemas</CardTitle>
            <CardDescription>SANTA GIULIA S.A. | JULIO 2019 - ACTUAL</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Desarrollo y mantenimiento de aplicaciones internas, enfocadas en la automatización de procesos y la optimización de flujos de trabajo diarios.
              </li>
              <li>
                Modernización de sistemas legados mediante la refactorización de código y la gestión de dependencias para mejorar la estabilidad y el rendimiento.
              </li>
              <li>
                Gestión integral de incidencias, proveyendo soporte técnico a usuarios y resolviendo casos para asegurar la continuidad operativa.
              </li>
              <li>
                Creación y mantenimiento de documentación técnica detallada e informes de estado para facilitar la gestión del conocimiento y el seguimiento de los sistemas.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
