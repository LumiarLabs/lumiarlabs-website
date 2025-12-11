"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles, Zap } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const LumiarLabsIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-foreground"
  >
    <path d="M14 0V14H28V0H14ZM0 28H14V14H0V28Z" fill="currentColor" />
  </svg>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px", // Trigger when section is near center/top
        threshold: 0.1,
      }
    );

    const sections = ["home", "lumipact", "team", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#lumipact", label: "LumiPact", badge: true },
    { href: "#team", label: "The Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-border/40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/60 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/60" 
          : "bg-background/40 backdrop-blur-sm border-transparent supports-[backdrop-filter]:bg-background/40"
      }`}
    >
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" prefetch={false}>
          <LumiarLabsIcon />
          <span className="text-lg font-bold tracking-tight text-foreground hidden sm:inline-flex items-baseline gap-1.5">
            LumiPact
            <span className="text-[10px] font-medium text-muted-foreground/80 tracking-normal">by LumiarLabs</span>
          </span>
        </Link>

        {/* Center: Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  prefetch={false}
                >
                  {link.label}
                  {link.badge && (
                    <span className="absolute -top-0.5 -right-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                  {/* Active Indicator - Purple Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-400 rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex">
            <ModeToggle />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full rounded-b-3xl pt-16 border-b border-border/40 bg-background/95 backdrop-blur-xl">
                <div className="grid gap-6 p-4">
                  <nav className="grid gap-4 justify-center text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
