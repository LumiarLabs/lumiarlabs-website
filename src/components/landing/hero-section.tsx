import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoCarousel } from "./logo-carousel";
import Waves from "@/components/ui/waves";

export function HeroSection() {
  return (
    <section className="relative isolate w-full h-screen flex items-center justify-center overflow-hidden">
      <Waves
        className="pointer-events-none absolute inset-0 -z-10"
        lineColor="rgba(255,255,255,0.16)"
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
        <h1 className="text-4xl font-normal tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl font-headline text-foreground">
          Powering Progress
          <br />
          through LumiarLabs
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Building the future of digital trust. We build technological software
          products that make tasks easier, more secure and seamless.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-glow btn-lux rounded-[14px]"
          >
            <Link href="#products">Our Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-glow btn-lux rounded-[14px]"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
        {/* Scroll hint */}
        <div className="mt-16 flex items-center justify-center gap-4 text-muted-foreground">
          <span className="text-sm">Scroll down</span>
          <div className="h-px w-40 sm:w-64 bg-muted-foreground/30" />
          <div aria-hidden className="mouse-indicator">
            <div className="mouse-wheel" />
          </div>
          <div className="h-px w-40 sm:w-64 bg-muted-foreground/30" />
          <span className="text-sm">to see projects</span>
        </div>
        <div className="mt-10">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}
