"use client";

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
import Waves from "@/components/ui/waves";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Joining..." : "Join Waitlist"}
    </Button>
  );
}

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { resolvedTheme } = useTheme();
  const [lineColor, setLineColor] = useState("rgba(255,255,255,0.16)");
  const { toast } = useToast();
  
  const [state, formAction] = useFormState(joinWaitlist, {
    success: false,
    message: '',
    errors: {},
  });

  useEffect(() => {
    setLineColor(resolvedTheme === "dark" ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.1)");
  }, [resolvedTheme]);

  // Handle success/error toasts
  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success! 🎉",
          description: state.message,
        });
        // Reset form on success
        const form = document.getElementById('waitlist-form') as HTMLFormElement;
        if (form) form.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`relative isolate w-full min-h-[calc(100dvh-var(--footer-h,96px))] bg-background flex items-center overflow-hidden scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Waves behind the content */}
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
        fadeTop={0.2}
        fadeBottom={0.2}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Big headline */}
          <h2 className="max-w-4xl text-center text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight font-headline text-foreground">
            Curious about our upcoming product? Join the waitlist for early
            beta access!
          </h2>

          {/* Contact form card under the headline */}
          <Card className="w-full max-w-xl bg-card/90 backdrop-blur-sm text-left">
            <CardHeader className="items-center text-center">
              <CardTitle>Join the Waitlist</CardTitle>
              <CardDescription>Be the first to try LumiPact.</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <form id="waitlist-form" action={formAction} className="space-y-4 text-left">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your Name"
                    required
                  />
                  {state?.errors?.name && (
                    <p className="text-sm text-destructive">{state.errors.name[0]}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  {state?.errors?.email && (
                    <p className="text-sm text-destructive">{state.errors.email[0]}</p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
