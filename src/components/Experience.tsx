const experiences = [
  {
    role: "Chief Marketing Officer",
    org: "Inspire Columbia",
    period: "2026 — Present",
    color: "bg-amber-500",
    bullets: [
      "Led brand strategy and marketing operations for a community-focused nonprofit events org.",
      "Built and managed social content pipelines, partnerships, and outreach campaigns.",
      "Oversaw creative direction for campaigns that drove real attendance and sponsor growth.",
    ],
  },
  {
    role: "Technical Producer",
    org: "TEDxCongaree Vista",
    period: "2026 — Present",
    color: "bg-blue-500",
    bullets: [
      "Handled AV setup, livestream tech, and on-site production for the full event.",
      "Coordinated with speakers and venue staff to make sure nothing broke on show day.",
      "Built run-of-show documents and technical checklists used by the whole crew.",
    ],
  },
  {
    role: "General Manager",
    org: "The Loose Cockaboose",
    period: "2025 — Present",
    color: "bg-emerald-500",
    bullets: [
      "Managed day-to-day operations, staffing, and logistics for a high-traffic venue.",
      "Created operational systems that reduced prep time and improved event turnover.",
      "Handled vendor relationships and inventory alongside event day coordination.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "CB Group LLC",
    period: "2026 — Present",
    color: "bg-cyan-500",
    bullets: [
      "Built and maintained internal software tools supporting business operations.",
      "Collaborated with team members to ship features and fix production issues on a real timeline.",
      "Gained hands-on experience working in a professional engineering environment.",
    ],
  },
  {
    role: "Software / Front-End Developer",
    org: "Projects & Hackathons",
    period: "2024 — Present",
    color: "bg-purple-500",
    bullets: [
      "Built full-stack apps using React, Next.js, FastAPI, and PostgreSQL across several projects.",
      "Competed in hackathons including Dominion Energy, shipping real products under pressure.",
      "Focused on clean UIs, proper architecture, and tools that people actually use.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber-500" />
            03 / EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Where I&apos;ve
            <br />
            <span className="text-white/25">shown up.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/6 hidden md:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-12">
                {/* Dot */}
                <div className={`absolute left-0 top-6 w-7 h-7 rounded-full ${exp.color} hidden md:flex items-center justify-center`}>
                  <span className="w-2 h-2 rounded-full bg-black" />
                </div>

                <div className="card-glass p-6 hover:border-white/12 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm text-white/40">{exp.org}</p>
                    </div>
                    <span className="font-mono text-xs text-white/25 bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/50">
                        <span className="mt-2 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
