"use client";

import { useEffect, useRef } from "react";

const marqueeText = "SOFTWARE  ·  SECURITY  ·  DESIGN  ·  SYSTEMS  ·  SOFTWARE  ·  SECURITY  ·  DESIGN  ·  SYSTEMS  ·  ";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame = 0;
    let start: number | null = null;
    const speed = 0.04;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      el.style.transform = `translateX(-${(elapsed * speed) % 50}%)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div
          ref={containerRef}
          className="whitespace-nowrap text-[clamp(4rem,12vw,10rem)] font-black text-white/[0.025] tracking-widest uppercase"
          style={{ width: "200%" }}
        >
          {marqueeText.repeat(3)}
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="section-label mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-amber-500" />
          Computer Science · USC
        </div>

        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.9] tracking-tight text-white mb-4">
          Tyler
          <br />
          <span className="text-white/30">Zolkos</span>
        </h1>

        <div className="flex flex-wrap gap-2 mb-6 mt-3">
          {["Cybersecurity", "Front-End Dev", "Software Eng"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-white/55 max-w-xl leading-relaxed mb-10">
          I build clean digital systems, event brands, and tools that solve real problems.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm rounded-full transition-all hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-white/20">
          Open to internships &amp; freelance work
        </p>
      </div>
    </section>
  );
}
