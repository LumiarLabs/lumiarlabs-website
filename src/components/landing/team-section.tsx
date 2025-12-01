"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Tile = {
  src: string;
  alt: string;
  ar: string; // aspect ratio class
  label: string; // overlay name per tile
};

// A simple bento layout using Picsum placeholders (remote domain allowed in next.config).
// Define tiles with aspect ratios to create visual rhythm.
const leftCol: Tile[] = [
  {
    src: "/individual-img3.jpg",
    alt: "Founders 3",
    ar: "aspect-[4/5]",
    label: "Luc Mwizerwa, CPO & Head of Design",
  },
  //   {
    //     src: "https://picsum.photos/seed/founder-d/1000/1000",
    //     alt: "Founder candid D",
    //     ar: "aspect-square",
  //   },
  //   {
    //     src: "https://picsum.photos/seed/lab/900/1200",
    //     alt: "In the lab",
    //     ar: "aspect-[4/5]",
  //   },
];

const centerCol: Tile[] = [
  {
    src: "/group-img3.jpg",
    alt: "Founder portrait",
    ar: "aspect-[16/9]",
    label: "Meet Us",
  },
  {
    src: "/individual-img1.jpg",
    alt: "Founder 1",
    ar: "aspect-square",
    label: "Arboy Magomba, CEO & Head of Product/Engineering",
  },
  //   {
  //     src: "https://picsum.photos/seed/founder-e/1000/1000",
  //     alt: "Founder candid E",
  //     ar: "aspect-square",
  //   },
];

const rightCol: Tile[] = [
  {
    src: "/individual-img2.jpg",
    alt: "Founder 2",
    ar: "aspect-[4/5]",
    label: "Messi Banzusabe, CTO & VP of Engineering",
  },
  //   {
  //     src: "https://picsum.photos/seed/founder-f/1000/1000",
  //     alt: "Founder candid F",
  //     ar: "aspect-square",
  //   },
  //   {
  //     src: "https://picsum.photos/seed/founder-g/900/1200",
  //     alt: "Founder portrait G",
  //     ar: "aspect-[4/5]",
  //   },
];

export function TeamSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="team"
      className={`w-full py-20 md:py-32 bg-background scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            The experts and talent behind Lumiar Labs.
          </p>
        </div>
        {/* Mobile / tablet: simple 2-col responsive grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {[...centerCol, ...leftCol, ...rightCol].map((t, i) => (
            <div
              key={i}
              className={`group relative ${t.ar} overflow-hidden border border-border/50`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <a href="#" className="glass-btn text-sm font-medium">
                {t.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Desktop: three staggered columns — center column starts higher */}
        <div className="mt-12 hidden lg:flex gap-2">
          {[
            { col: leftCol, mt: "mt-20" },
            { col: centerCol, mt: "mt-0" },
            { col: rightCol, mt: "mt-20" },
          ].map((group, gi) => (
            <div key={gi} className={`flex-1 ${group.mt} space-y-2`}>
              {group.col.map((t, i) => (
                <div
                  key={i}
                  className={`group relative ${t.ar} overflow-hidden border border-border/50`}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    className="object-cover transition duration-500"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <a href="#" className="glass-btn text-sm font-medium">
                    {t.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* CTA row under the bento grid */}
        {/* <div className="mt-20 flex items-center justify-center gap-6">
          <Link
            href="#products"
            className="text-lg underline underline-offset-4 hover:text-primary"
          >
            All Projects
          </Link>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-glow btn-lux rounded-[14px]"
          >
            <Link href="#contact">Contact the Team</Link>
          </Button>
        </div> */}

        {/* Section divider (not full width) */}
        <div className="mx-auto my-15 md:my-25 h-px w-full max-w-8xl bg-border/60" />

        {/* Letter from the CEO */}
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-4xl md:text-6xl font-headline">
              Letter to All of You
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground/60">
                <span aria-hidden className="text-2xl leading-none">
                  “
                </span>
                <span className="text-xs uppercase tracking-wide">
                  A note from Arboy Magomba
                </span>
              </div>
              <p className="border-l border-border/60 pl-6 italic text-foreground/90 md:text-lg leading-relaxed">
                I fell in love with technology through video games. At six, a
                controller and a blinking cursor felt like a portal; modding
                levels and tweaking settings taught me how systems work. That
                spark, turning play into possibility, pulled me into code,
                product design, and building tools that scream fun, elegance,
                and impact.
                <br />
                <br />
                At Lumiar Labs, that same curiosity drives our mission: to build software that is as enjoyable as it is impactful. We create verifiable, human-centered products that make complex systems feel effortless. Our commitment is to build tools that are secure, private, and beautifully simple, technology that works for you, not the other way around. Thank you for being part of this journey; your feedback, partnership, and belief shape what we release next.
                <br />
                <br />
                “The people who are crazy enough to think they can change the
                world are the ones who do.”
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/50">
            <Image
              src="/group-img1.jpg"
              alt="CEO portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
