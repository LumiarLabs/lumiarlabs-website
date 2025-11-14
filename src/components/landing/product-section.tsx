import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Cloud, Cog, Wallet } from "lucide-react";

const products = [
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "GovCloud Suite (B2G)",
    description:
      "Fast, fraud-resistant public-service delivery for local, state & national agencies.",
    details: "Ready-made permit, licence, registry & procurement modules.",
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: "Compliance API (B2B)",
    description:
      "Instant KYC/AML & credential validation for banks, HR tech, health-care, and gig platforms.",
    details:
      "A single API call returns verifiable credentials & smart-contract signatures.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Mobile Wallet (B2C)",
    description:
      "Control & share your credentials anywhere, for citizens & micro-entrepreneurs.",
    details:
      "Free wallet, with premium notarisation & cross-border ID add-ons.",
  },
];

export function ProductSection() {
  return (
    /* Changed py-10 md:py-20 */
    <section id="products" className="w-full py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            The GovAI Unified Trust Platform
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A three-tier product to provide secure, AI-driven workflows and
            blockchain-anchored data integrity.
          </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.title}
              className="flex flex-col border-border/50 hover:border-primary/50 transition-colors duration-300 bg-card"
            >
              <CardHeader className="items-center text-center">
                {product.icon}
                <CardTitle className="mt-4 text-xl font-bold">
                  {product.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-center">
                <p className="text-sm text-center text-foreground">
                  {product.details}
                </p>
              </CardContent>
            </Card>
          ))}
          </div>
      </div>
    </section>
  );
}
