"use client";

import { useActionState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { getComplianceSummary } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

type ComplianceErrors = {
  industry?: string[];
};

type ComplianceState = {
  message: string;
  errors: ComplianceErrors;
  summary: string;
};

const initialState: ComplianceState = {
  message: "",
  errors: {},
  summary: "",
};

export function ComplianceSection() {
  const [state, formAction, isPending] = useActionState(
    getComplianceSummary,
    initialState
  );
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Success" && state.summary) {
      toast({
        title: "Summary Generated",
        description: "The compliance summary has been successfully generated.",
      });
    } else if (state.message && state.message !== "Success") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="compliance" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Compliance Simplified
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Enter an industry to get a summary of its key regulatory
              requirements, powered by AI.
            </p>
            {state.summary && (
              <Card className="bg-card mt-6">
                <CardHeader>
                  <CardTitle>Compliance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{state.summary}</p>
                </CardContent>
              </Card>
            )}
          </div>
          <Card className="w-full max-w-lg mx-auto bg-card">
            <CardHeader>
              <CardTitle>Generate Summary</CardTitle>
              <CardDescription>Enter an industry to begin.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    name="industry"
                    placeholder="e.g., Healthcare, Finance"
                  />
                  {state.errors?.industry && (
                    <p className="text-sm font-medium text-destructive">
                      {state.errors.industry[0]}
                    </p>
                  )}
                </div>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Generate
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
