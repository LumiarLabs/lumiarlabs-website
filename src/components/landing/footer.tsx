"use client";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const PortfoliteIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 0V14H28V0H14ZM0 28H14V14H0V28Z" fill="white" />
  </svg>
);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el || typeof window === "undefined") return;
    const setVar = () => {
      document.documentElement.style.setProperty(
        "--footer-h",
        `${el.offsetHeight}px`
      );
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <PortfoliteIcon />
            <span className="font-semibold">LumiarLabs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LumiarLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
