import {
  Infinity as InfinityIcon,
  Sparkles,
  Rocket,
  Fingerprint,
  BadgeCheck,
  ShieldCheck,
  Layers3,
  EyeOff,
} from "lucide-react";

type Principle = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const principles: Principle[] = [
  { label: "Seamless", Icon: InfinityIcon },
  { label: "Intuitive", Icon: Sparkles },
  { label: "Performance", Icon: Rocket },
  { label: "Security", Icon: Fingerprint },
  { label: "Transparency", Icon: BadgeCheck },
  { label: "Compliance", Icon: ShieldCheck },
  { label: "Scalability", Icon: Layers3 },
  { label: "Privacy‑First", Icon: EyeOff },
];

export function LogoCarousel() {
  const items = [...principles, ...principles, ...principles, ...principles];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="mx-auto max-w-4xl marquee-mask">
        <div className="scroll-loop">
          {items.map(({ label, Icon }, index) => {
            return (
              <div
                key={`${label}-${index}`}
                className="flex items-center justify-center mx-8 sm:mx-12 flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                  <span className="text-sm sm:text-base font-medium tracking-tight">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
