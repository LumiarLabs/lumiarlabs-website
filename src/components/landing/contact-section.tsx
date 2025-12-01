// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Loader2 } from "lucide-react";
// import { useState } from "react";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters." }),
// });

// export function ContactSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     console.log(values);
//     setIsSubmitting(false);
//     toast({
//       title: "Message Sent!",
//       description: "Thanks for reaching out. We'll get back to you soon.",
//     });
//     form.reset();
//   }

//   return (
//     <section id="contact" className="w-full py-20 md:py-32 bg-background">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
//               Get in Touch
//             </h2>
//             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
//               Have a question or want to work with us? We'd love to hear from
//               you. Fill out the form and we'll get back to you as soon as
//               possible.
//             </p>
//           </div>
//           <Card className="w-full max-w-lg mx-auto bg-card">
//             <CardHeader>
//               <CardTitle>Contact Us</CardTitle>
//               <CardDescription>
//                 Fill out the form below to send us a message.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="space-y-4"
//                 >
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Your Name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="your.email@example.com"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             placeholder="How can we help you?"
//                             className="resize-none"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full"
//                   >
//                     {isSubmitting && (
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     )}
//                     Send Message
//                   </Button>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

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
import { Textarea } from "@/components/ui/textarea";
import Waves from "@/components/ui/waves";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { resolvedTheme } = useTheme();
  const [lineColor, setLineColor] = useState("rgba(255,255,255,0.16)");

  useEffect(() => {
    setLineColor(resolvedTheme === "dark" ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.1)");
  }, [resolvedTheme]);

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
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>We'd love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <form className="space-y-4 text-left">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Join Waitlist
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
