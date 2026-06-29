"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/hero";

const ScrollRestoration = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return null;
};

// Lazy load the new structure components
const WingmanTeaser = dynamic(() => import("@/components/WingmanTeaser"), { ssr: false });
const IntelligenceLayers = dynamic(() => import("@/components/intelligence-layers"), { ssr: false });
const ArchitectureStack = dynamic(() => import("@/components/architecture-stack"), { ssr: false });
const Environments = dynamic(() => import("@/components/environments"), { ssr: false });
const Ecosystem = dynamic(() => import("@/components/ecosystem"), { ssr: false });
const LimitlessImpact = dynamic(() => import("@/components/limitless-impact"), { ssr: false });
const LeadershipAdvisors = dynamic(() => import("@/components/leadership-advisors"), { ssr: false });
const Cta = dynamic(() => import("@/components/cta"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

function LazyLoad({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    let attempts = 0;
    const maxAttempts = 30;
    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 100);
      }
    };
    window.setTimeout(tryScroll, 50);
  }, []);

  return (
    <div className="flex flex-col bg-gray-950 text-gray-100 min-h-screen">
      <ScrollRestoration />
      <Header />
      <Hero />
      
      <LazyLoad><WingmanTeaser /></LazyLoad>
      <LazyLoad><IntelligenceLayers /></LazyLoad>
      <LazyLoad><ArchitectureStack /></LazyLoad>
      <LazyLoad><Environments /></LazyLoad>
      <LazyLoad><LimitlessImpact /></LazyLoad>
      <LazyLoad><Ecosystem /></LazyLoad>
      <LazyLoad><LeadershipAdvisors /></LazyLoad>
      <LazyLoad><Cta /></LazyLoad>
      <LazyLoad><Footer /></LazyLoad>
      
    </div>
  );
}
