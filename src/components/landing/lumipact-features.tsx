"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Zap, BarChart3, PieChart, ArrowUpRight, ArrowDownRight, Check, Shield, FileText, Clock, AlertTriangle, Cloud } from "lucide-react";
import Link from "next/link";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function LumiPactFeatures() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.15);

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`w-full py-16 md:py-24 bg-background scroll-animate ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300 mb-6">
            <span className="text-xs font-medium">Unique Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Never Sign Blindly Again
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            LumiPact acts as your personal legal co-pilot, turning complex legalese
            <br className="hidden md:block" />
            into plain English and flagging unfair terms instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Contract Velocity */}
          <div className="group rounded-[32px] bg-card p-2 border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 w-full bg-muted/30 rounded-[24px] flex items-center justify-center overflow-hidden">
              <div className="relative z-10 bg-card rounded-2xl shadow-sm border border-border/50 p-6 w-[85%] flex flex-col gap-4">
                {/* Wizard Mockup */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-medium text-muted-foreground">Contract Wizard</span>
                     <Badge variant="outline" className="text-[10px] h-5">Step 2 of 3</Badge>
                  </div>
                  <div className="space-y-2">
                     <div className="text-sm font-semibold">What type of work is this?</div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="border border-primary bg-primary/5 rounded-md p-2 text-xs font-medium text-primary flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-2 h-2 text-primary-foreground" />
                           </div>
                           Freelance
                        </div>
                        <div className="border border-border rounded-md p-2 text-xs text-muted-foreground">Employment</div>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-sm font-semibold">Payment terms?</div>
                     <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary rounded-full" />
                     </div>
                  </div>
                </div>
                
                {/* Floating "Generated" Badge */}
                <div className="absolute -right-4 top-1/2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-green-200 rotate-12 animate-in fade-in zoom-in duration-500 delay-300">
                   Generated!
                </div>
              </div>
              
              {/* Background Grid Pattern for texture */}
              <div className="absolute inset-0 opacity-[0.03]" 
                   style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
              </div>
            </div>
            
            <div className="px-6 py-6">
              <h3 className="text-xl font-bold mb-2">AI-Tailored Contracts</h3>
              <p className="text-muted-foreground">
                Answer a few simple questions about your deal, whether it's a service agreement, employment offer, or partnership and get a bulletproof contract in seconds.
              </p>
            </div>
          </div>

          {/* Card 2: AI Risk Detection */}
          <div className="group rounded-[32px] bg-card p-2 border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 w-full bg-muted/30 rounded-[24px] flex items-center justify-center overflow-hidden">
               <div className="relative z-10 w-[90%] flex gap-2">
                  {/* Left: Legalese */}
                  <div className="flex-1 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 scale-95 opacity-60">
                     <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] font-mono text-muted-foreground">Original</span>
                     </div>
                     <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-muted-foreground/20 rounded-full" />
                        <div className="h-1.5 w-[90%] bg-muted-foreground/20 rounded-full" />
                        <div className="h-1.5 w-[95%] bg-muted-foreground/20 rounded-full" />
                        <div className="h-1.5 w-[80%] bg-muted-foreground/20 rounded-full" />
                     </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background rounded-full p-1 border border-border shadow-sm">
                     <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>

                  {/* Right: Plain English */}
                  <div className="flex-1 bg-card p-3 rounded-xl border border-primary/20 shadow-lg scale-105 z-10">
                     <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold text-primary">Simplified</span>
                     </div>
                     <p className="text-[10px] leading-relaxed font-medium text-foreground">
                        "You get paid within 15 days. If they're late, they owe you 5% interest."
                     </p>
                  </div>
               </div>
               
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
            </div>
            
            <div className="px-6 py-6">
              <h3 className="text-xl font-bold mb-2">Plain-English Translator</h3>
              <p className="text-muted-foreground">
                Don't speak lawyer? We do. See a clear summary of every clause alongside the legal text, so you know exactly what you're agreeing to.
              </p>
            </div>
          </div>

          {/* Card 3: Seamless Integrations */}
          <div className="group rounded-[32px] bg-card p-2 border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 w-full bg-muted/30 rounded-[24px] flex items-center justify-center overflow-hidden">
               <div className="relative z-10 bg-card rounded-2xl shadow-sm border border-border/50 p-6 w-[85%] flex flex-col gap-3">
                   {/* Document Header */}
                   <div className="flex items-center gap-3 border-b border-border pb-3">
                      <div className="w-8 h-8 rounded-md bg-red-100 flex items-center justify-center text-red-600">
                         <FileText className="w-4 h-4" />
                      </div>
                      <div>
                         <div className="text-xs font-semibold">Service_Agreement_v1.pdf</div>
                         <div className="text-[10px] text-muted-foreground">Uploaded just now</div>
                      </div>
                   </div>
                   
                   {/* Suggestion Item */}
                   <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                         <AlertTriangle className="w-3 h-3 text-amber-600 mt-0.5" />
                         <div className="space-y-1">
                            <div className="text-[10px] font-bold text-amber-700 dark:text-amber-400">Unfair Termination Clause</div>
                            <div className="text-[10px] text-muted-foreground">Suggestion: Add "30 days notice" requirement.</div>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
            
            <div className="px-6 py-6">
              <h3 className="text-xl font-bold mb-2">Smart Negotiation</h3>
              <p className="text-muted-foreground">
                Upload a contract you've received. AI spots the red flags and suggests professional edits to help you negotiate better terms.
              </p>
            </div>
          </div>

          {/* Card 4: Negotiation Timeline */}
          <div className="group rounded-[32px] bg-card p-2 border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 w-full bg-muted/30 rounded-[24px] flex items-center justify-center overflow-hidden">
               <div className="relative z-10 w-[85%] grid grid-cols-2 gap-3">
                  {/* File 1 */}
                  <div className="bg-card p-3 rounded-xl shadow-sm border border-border/50 flex flex-col gap-2 group-hover:-translate-y-1 transition-transform duration-300">
                     <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                        <FileText className="w-4 h-4" />
                     </div>
                     <div>
                        <div className="text-[10px] font-semibold truncate">Design_Contract.pdf</div>
                        <div className="text-[9px] text-muted-foreground">Signed 2h ago</div>
                     </div>
                     <div className="mt-1 inline-flex items-center gap-1 text-[9px] font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full w-fit">
                        <Check className="w-2 h-2" /> Signed
                     </div>
                  </div>

                  {/* File 2 */}
                  <div className="bg-card p-3 rounded-xl shadow-sm border border-border/50 flex flex-col gap-2 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                     <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                        <FileText className="w-4 h-4" />
                     </div>
                     <div>
                        <div className="text-[10px] font-semibold truncate">NDA_Client_X.pdf</div>
                        <div className="text-[9px] text-muted-foreground">Signed yesterday</div>
                     </div>
                     <div className="mt-1 inline-flex items-center gap-1 text-[9px] font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded-full w-fit">
                        <Check className="w-2 h-2" /> Signed
                     </div>
                  </div>

                  {/* File 3 */}
                  <div className="bg-card p-3 rounded-xl shadow-sm border border-border/50 flex flex-col gap-2 group-hover:-translate-y-1 transition-transform duration-300 delay-150 col-span-2">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-md bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                              <FileText className="w-3 h-3" />
                           </div>
                           <div className="text-[10px] font-semibold">Employment_Offer.pdf</div>
                        </div>
                        <div className="inline-flex items-center gap-1 text-[9px] font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded-full">
                           <Clock className="w-2 h-2" /> Pending
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Background Glow */}
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />
            </div>
            
            <div className="px-6 py-6">
              <h3 className="text-xl font-bold mb-2">Sign & Store Securely</h3>
              <p className="text-muted-foreground">
                Send for e-signature with one click and keep all your deals organized in a searchable vault. Never lose a contract again.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Join the freelancers, creators, and founders taking control of their contracts.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow btn-lux rounded-[14px] text-base px-8 py-6"
          >
            <Link href="#contact">
              <Sparkles className="h-5 w-5 mr-2" />
              Get Started with LumiPact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
