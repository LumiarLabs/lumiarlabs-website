"use client";

import { Eye, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function VisionMissionSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="vision"
      className={`w-full py-20 md:py-32 bg-card scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground self-center lg:self-start">
            Our Vision
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Trusted digital interactions for everyone.
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
            Our vision is to enable trusted digital interactions for every
            citizen, business, and public institution.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground self-center lg:self-start">
            Our Mission
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Instant, tamper-proof transactions.
            </h2>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
            Our mission is to deploy composable AI & blockchain primitives that
            replace paper processes with instant, tamper-proof transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
