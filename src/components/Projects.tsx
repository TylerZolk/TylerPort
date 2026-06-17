"use client";

const projects = [
  {
    id: "01",
    name: "PolePadAI",
    tagline: "Hackathon · Dominion Energy",
    description:
      "A utility pole inspection workflow tool built at the Dominion Energy hackathon. I owned the front-end, API integration, dashboard flow, authentication setup, and deployment polish. Tight deadline, real constraints.",
    stack: ["Next.js", "React", "Tailwind", "TypeScript", "Vercel"],
    color: "from-amber-500/10 to-transparent",
    accentColor: "text-amber-400",
    status: "Hackathon Build",
    github: "https://github.com/TylerZolk/GridstormFrontEnd",
  },
  {
    id: "02",
    name: "PalmettoInsurance",
    tagline: "Hackathon · PalmettoHacks 2026 · Capgemini",
    description:
      "An AI-powered insurance operations platform built at PalmettoHacks 2026. Features claims filing with photo upload and AI triage, a 24/7 multilingual policy assistant, usage-based pricing, and digital document access — all with human-in-the-loop approval. Sub-2-minute claim intake, 91% AI accuracy.",
    stack: ["Next.js", "TypeScript", "Azure", "OpenAI", "Tailwind", "Cosmos DB"],
    color: "from-sky-500/10 to-transparent",
    accentColor: "text-sky-400",
    status: "Hackathon Build",
    github: "https://github.com/TylerZolk/PalmettoInsurance",
  },
  {
    id: "03",
    name: "VulnVault",
    tagline: "Cybersecurity · Personal Project",
    description:
      "A vulnerability tracking system designed around a proper business/service layer architecture. PostgreSQL backend, FastAPI for the REST layer, and a clean separation of concerns throughout.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQL"],
    color: "from-blue-500/10 to-transparent",
    accentColor: "text-blue-400",
    status: "Completed",
    github: "https://github.com/TylerZolk/CSCE548Project",
  },
  {
    id: "04",
    name: "SC Economics Volunteers",
    tagline: "Platform · Full-Stack",
    description:
      "A volunteer management platform with admin dashboard features, event tracking, and volunteer hour workflows. Built to replace spreadsheets that weren't scaling.",
    stack: ["Next.js", "Prisma", "Tailwind", "GitHub"],
    color: "from-emerald-500/10 to-transparent",
    accentColor: "text-emerald-400",
    status: "Live",
    github: "https://github.com/ktp-usc/sc-economics-volunteers",
  },
  {
    id: "05",
    name: "ShiftSync",
    tagline: "Scheduling Platform · Full-Stack",
    description:
      "A multi-role shift scheduling app for restaurant groups. Employees submit availability and clock in via PIN, managers build schedules and manage staff, and owners get a cross-location overview. Built with role-based views, shift templates, and preset management.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    color: "from-teal-500/10 to-transparent",
    accentColor: "text-teal-400",
    status: "Live",
    github: "https://github.com/TylerZolk/TLCSchedule",
  },
  {
    id: "06",
    name: "Inspire Columbia / TEDx",
    tagline: "Event Systems · Creative Direction",
    description:
      "Branding, marketing, technical production, and operations for community-focused events in Columbia, SC. From designing decks to running AV — the whole stack, just not the software kind.",
    stack: ["Branding", "AV Production", "Marketing", "Leadership"],
    color: "from-purple-500/10 to-transparent",
    accentColor: "text-purple-400",
    status: "Ongoing",
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-amber-500" />
              01 / PROJECTS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Featured
              <br />
              <span className="text-white/25">work.</span>
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs">
            A mix of hackathon builds, personal tools, and event systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.id}
              className="card-glass group overflow-hidden"
            >
              {/* Project header area */}
              <div
                className={`relative h-44 bg-gradient-to-br ${p.color} bg-[#111] border-b border-white/5 overflow-hidden`}
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <h3 className="text-2xl font-black text-white/10 leading-none">{p.name}</h3>
                  <span className={`font-mono text-xs ${p.accentColor} bg-black/30 px-2 py-1 rounded`}>
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs text-white/30 mt-0.5">{p.tagline}</p>
                </div>

                <p className="text-sm text-white/50 leading-relaxed mt-3 mb-5">
                  {p.description}
                </p>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 bg-white/[0.04] border border-white/8 rounded text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors font-mono"
                    >
                      ◎ GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
