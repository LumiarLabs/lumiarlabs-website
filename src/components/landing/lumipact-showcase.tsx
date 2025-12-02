"use client";

import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { DashboardMockup, NegotiationMockupA, TemplatesMockup, StudioMockup } from "@/components/landing/mockups";

const highlights = [
  { icon: <Zap />, label: "AI-Powered", value: "Real-time Analysis" },
  { icon: <Shield />, label: "Secure", value: "Enterprise-Grade" },
  { icon: <CheckCircle2 />, label: "Accurate", value: "95%+ Precision" },
];

export function LumiPactShowcase() {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.15);

  useEffect(() => {
    const handleScroll = () => {
      if (!screenshotRef.current) return;

      const element = screenshotRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      // Start animating when element enters viewport, complete when it's centered
      const start = windowHeight;
      const end = windowHeight / 2;
      const current = rect.top;

      if (current <= start && current >= end) {
        const progress = 1 - (current - end) / (start - end);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else if (current < end) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll progress
  const rotateX = 45 - scrollProgress * 45; // From 45deg (tilted back) to 0deg (straight)
  const scale = 0.8 + scrollProgress * 0.2; // From 0.8 to 1.0
  const opacity = 0.3 + scrollProgress * 0.7; // From 0.3 to 1.0

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="lumipact"
      className={`relative w-full py-16 md:py-24 bg-background scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Introducing LumiPact
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Smart Contract Intelligence
            </span>
          </h2>

          <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl mb-8">
            Transform how you create, analyze, and negotiate contracts with
            AI-powered precision. LumiPact combines cutting-edge AI with
            intuitive design to streamline your entire contract workflow.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="btn-glow btn-lux rounded-[14px] text-base px-8 py-6"
            >
              <Link href="#contact">Join Beta Program</Link>
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex items-center gap-2 text-sm"
              >
                <div className="text-purple-400">{highlight.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {highlight.value}
                  </div>
                  <div className="text-muted-foreground">{highlight.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Animated Product Screenshot */}
        <div
          id="features"
          className="relative py-16"
          style={{ perspective: "1500px" }}
        >
          <div
            ref={screenshotRef}
            style={{
              transform: `rotateX(${rotateX}deg) scale(${scale})`,
              opacity: opacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
            className="relative mx-auto max-w-6xl h-[600px] md:h-[700px]"
          >
            {/* Gradient Glow - matching Smart Contract Intelligence */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl opacity-20 blur-3xl" />
            
            {/* Stacked Cards Container */}
            <div 
              className="relative w-full h-full cursor-pointer group"
              onClick={() => {
                // Cycle cards: 0 -> 1 -> 2 -> 0
                setScrollProgress((prev) => {
                   // We are reusing this state or should we create a new one? 
                   // The scrollProgress is for the tilt. We need a new state for the card index.
                   return prev; 
                });
                setActiveCard((prev) => (prev + 1) % 4);
              }}
            >
              {[
                { Component: TemplatesMockup, id: 3 },
                { Component: NegotiationMockupA, id: 2 },
                { Component: StudioMockup, id: 1 },
                { Component: DashboardMockup, id: 0 },
              ].map((item, index) => {
                // Calculate position relative to active card
                // We want 4 positions: 0 (Front), 1 (Second), 2 (Third), 3 (Back)
                const position = (item.id - activeCard + 4) % 4;
                
                // Styles for each position
                const styles = {
                  0: { // Front
                    zIndex: 40,
                    transform: 'translateY(0px) scale(1)',
                    opacity: 1,
                  },
                  1: { // Second
                    zIndex: 30,
                    transform: 'translateY(12px) scale(0.98)',
                    opacity: 0.9,
                  },
                  2: { // Third
                    zIndex: 20,
                    transform: 'translateY(24px) scale(0.96)',
                    opacity: 0.7,
                  },
                  3: { // Back
                    zIndex: 10,
                    transform: 'translateY(36px) scale(0.94)',
                    opacity: 0.5,
                  },
                };

                const currentStyle = styles[position as keyof typeof styles];

                return (
                  <div
                    key={item.id}
                    className="absolute inset-0 rounded-xl border bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-white/5 transition-all duration-500 ease-in-out"
                    style={{
                      zIndex: currentStyle.zIndex,
                      transform: currentStyle.transform,
                      opacity: currentStyle.opacity,
                    }}
                  >
                    <div className="w-full h-full pointer-events-none">
                      <item.Component />
                    </div>
                  </div>
                );
              })}
              
              {/* Click Hint */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                <span className="animate-pulse">Click to cycle view</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
