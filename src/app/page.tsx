import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SkillAnalyzer } from "@/components/skill-analyzer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-20 md:gap-32">
          <Hero />
          <Projects />
          <Skills />
          <SkillAnalyzer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
