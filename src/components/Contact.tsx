"use client";

const socials = [
  { label: "GitHub", href: "https://github.com/TylerZolk", icon: "◎" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tylerzolkos", icon: "in" },
  { label: "Email", href: "mailto:tylerzolk@gmail.com", icon: "@" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <div className="section-label mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-amber-500" />
            06 / CONTACT
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-amber-400">something useful.</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-10">
            Whether you&apos;re looking for a dev intern, a collaborator on something weird, or
            just want to connect — reach out. I actually check my messages.
          </p>

          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center font-mono text-xs text-white/40 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all">
                  {s.icon}
                </span>
                <span className="text-sm text-white/50 group-hover:text-white transition-colors">
                  {s.label}
                </span>
                <span className="ml-auto text-white/20 group-hover:text-amber-400 transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
