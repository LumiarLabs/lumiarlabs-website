import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FileWarning, Lock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: <FileWarning className="h-10 w-10 text-primary" />,
    title: "Generic Templates Fail",
    description:
      "Downloaded templates are often outdated, static, and don't cover the specific risks of your unique situation.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Legalese is Opaque",
    description:
      "Complex clauses hide unfair terms, non-competes, and IP grabs that you might miss until it's too late.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Lawyers are Expensive",
    description:
      "Reviewing a job offer or service agreement shouldn't cost hundreds of dollars per hour.",
  },
];

export function ProductSection() {
  return (
    <section id="problem" className="w-full py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            The "Just Sign It" Era is Over
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Most people sign important documents without understanding them because lawyers are too expensive. We're changing that.
          </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="flex flex-col border-border/50 hover:border-primary/50 transition-colors duration-300 bg-card"
            >
              <CardHeader className="items-center text-center">
                {problem.icon}
                <CardTitle className="mt-4 text-xl font-bold">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center">
                <p className="text-base text-center text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
          </div>
      </div>
    </section>
  );
}
