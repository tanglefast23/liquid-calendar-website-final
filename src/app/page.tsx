import { HeroSection } from "@/components/sections/hero";
import { ValueStrip } from "@/components/sections/value-strip";
import { ViewsSection } from "@/components/sections/views-grid";
import { FeaturesSection } from "@/components/sections/features";
import { TechSection } from "@/components/sections/tech-stack";

import { Navigation } from "@/components/sections/navigation";
import { PageShell } from "@/components/page-shell";

export default function Home() {
  return (
    <PageShell>
      <main className="relative">
        <Navigation />
        <HeroSection />
        <ValueStrip />
        <ViewsSection />
        <FeaturesSection />
        <TechSection />
      </main>
    </PageShell>
  );
}
