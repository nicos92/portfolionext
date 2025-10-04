import { Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-lg font-bold text-foreground">
            PortfolioPro
          </h1>
        </div>
        <Button asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download />
            Download Resume
          </a>
        </Button>
      </div>
    </header>
  );
}
