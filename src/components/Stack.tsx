"use client";

const categories = [
  {
    id: "01",
    title: "Languages & Frameworks",
    tools: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "C++" },
      { name: "Tailwind", icon: "~" },
      { name: "Flutter", icon: "◆" },
      { name: "PHP", icon: "</>" },
    ],
  },
  {
    id: "02",
    title: "Databases & Backend",
    tools: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🗄" },
      { name: "Prisma", icon: "◈" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Supabase", icon: "⚡" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS RDS", icon: "☁" },
      { name: "DynamoDB", icon: "⬡" },
      { name: "S3", icon: "🪣" },
    ],
  },
  {
    id: "03",
    title: "Tools & Platforms",
    tools: [
      { name: "Git", icon: "⎇" },
      { name: "GitHub", icon: "◎" },
      { name: "Vercel", icon: "▲" },
      { name: "VS Code", icon: "{ }" },
      { name: "Figma", icon: "✦" },
      { name: "Canva", icon: "©" },
      { name: "Railway", icon: "🚄" },
    ],
  },
];

function ToolTile({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#111] border border-white/6 hover:border-white/14 hover:bg-[#161616] transition-all cursor-default hover:-translate-y-0.5">
      <span className="text-xl leading-none select-none" aria-hidden>
        {icon}
      </span>
      <span className="text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber-500" />
            02 / STACK
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            The Stack
            <br />
            <span className="text-white/25">Matrix.</span>
          </h2>
          <p className="text-sm text-white/35 max-w-sm">
            Technologies I reach for, organized by where they live in the build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.id} className="card-glass p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-mono text-[10px] text-amber-500 mb-1">{cat.id}</div>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                </div>
                <span className="font-mono text-xs text-white/20">{cat.tools.length}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
                {cat.tools.map((tool) => (
                  <ToolTile key={tool.name} {...tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
