import Image from "next/image";

type Tile = {
  src: string;
  alt: string;
  ar: string; // aspect ratio class
};

// A simple bento layout using Picsum placeholders (remote domain allowed in next.config).
// Define tiles with aspect ratios to create visual rhythm.
const leftCol: Tile[] = [
  {
    src: "https://picsum.photos/seed/founder-a/900/1200",
    alt: "Founders 3",
    ar: "aspect-[4/5]",
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
    src: "/Sam_Ive.jpg",
    alt: "Founder portrait",
    ar: "aspect-[16/9]",
  },
  {
    src: "https://picsum.photos/seed/founder-c/1000/1000",
    alt: "Founder 1",
    ar: "aspect-square",
  },
  //   {
  //     src: "https://picsum.photos/seed/founder-e/1000/1000",
  //     alt: "Founder candid E",
  //     ar: "aspect-square",
  //   },
];

const rightCol: Tile[] = [
  {
    src: "https://picsum.photos/seed/founder-b/900/1200",
    alt: "Founder 2",
    ar: "aspect-[4/5]",
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
  return (
    <section id="team" className="w-full py-20 md:py-32 bg-background">
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
              className={`relative ${t.ar} overflow-hidden border border-border/50`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover transition duration-500 grayscale hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
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
                  className={`relative ${t.ar} overflow-hidden border border-border/50`}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    className="object-cover transition duration-500 grayscale hover:grayscale-0"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
