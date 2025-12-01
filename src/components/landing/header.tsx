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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative"
                prefetch={false}
              >
                {link.label}
                {link.badge && (
                  <span className="absolute -top-0.5 -right-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                )}
              </Link>
            ))}
          </nav>
          <div className="w-px h-4 bg-border/50" />
          <ModeToggle />
        </div>

        {/* Right: CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex btn-glow btn-lux rounded-full px-6">
            <Link href="https://lumipact.app" target="_blank" prefetch={false}>
              Launch LumiPact
            </Link>
          </Button>

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
                    <Button asChild variant="default" className="w-full max-w-xs rounded-full btn-glow btn-lux">
                      <Link href="https://lumipact.app" target="_blank" prefetch={false}>
                        Launch LumiPact
                      </Link>
                    </Button>
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
