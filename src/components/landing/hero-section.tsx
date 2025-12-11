"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoCarousel } from "./logo-carousel";
import Waves from "@/components/ui/waves";
import { Zap, ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [lineColor, setLineColor] = useState("rgba(255,255,255,0.16)");

  useEffect(() => {
    setLineColor(resolvedTheme === "dark" ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.1)");
  }, [resolvedTheme]);

  return (
    <section id="home" className="relative isolate w-full h-screen flex items-center justify-center overflow-hidden">
      <Waves
        className="pointer-events-none absolute inset-0 -z-10"
        lineColor={lineColor}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        xGap={12}
        yGap={36}
        fadeTop={0.4}
        fadeBottom={0.2}
      />
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-normal tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl font-headline text-foreground opacity-0 animate-slide-up">
          The AI Contract Studio
          <br />
          for Everyone
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl opacity-0 animate-slide-up animation-delay-200">
          Create, understand, and negotiate professional contracts in minutes. Whether you're hiring, freelancing, or signing a job offer, get fair terms without the legal fees.
        </p>
        
        {/* Enhanced CTA Section with LumiPact Primary */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-slide-up animation-delay-400 w-full sm:w-auto px-4 sm:px-0">
          {/* PRIMARY CTA - Join Waitlist (Left) */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="btn-glow btn-lux rounded-[14px] w-full sm:w-auto font-semibold"
          >
            <Link href="#contact">Join the Waitlist</Link>
          </Button>
          
          {/* SECONDARY CTA - Explore Features (Right, Text Link) */}
          <Link 
            href="#lumipact"
            className="group flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors font-medium shadow-purple-400/20 drop-shadow-sm"
          >
            <span className="relative">
              Explore Features
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-400 rounded-full" />
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        {/* Scroll hint */}
        <div className="mt-16 flex items-center justify-center gap-4 text-muted-foreground opacity-0 animate-fade-in animation-delay-500">
          <span className="text-sm">Scroll down</span>
          <div className="h-px w-40 sm:w-64 bg-muted-foreground/30" />
          <div aria-hidden className="mouse-indicator">
            <div className="mouse-wheel" />
          </div>
          <div className="h-px w-40 sm:w-64 bg-muted-foreground/30" />
          <span className="text-sm">to see projects</span>
        </div>
        <div className="mt-10 opacity-0 animate-fade-in animation-delay-500">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}
