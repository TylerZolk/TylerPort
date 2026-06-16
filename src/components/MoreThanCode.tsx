const cards = [
  {
    number: "01",
    title: "Event Production",
    description:
      "From TEDx stages to venue operations — I've run the technical and logistical side of events that need to go right on the day.",
    tags: ["AV", "Logistics", "Run-of-show"],
    icon: "🎙",
  },
  {
    number: "02",
    title: "Team Leadership",
    description:
      "Led marketing teams, managed staff, and coordinated across departments. I'm used to being the person who makes sure things actually get done.",
    tags: ["Management", "Operations", "Coordination"],
    icon: "◈",
  },
  {
    number: "03",
    title: "Marketing & Branding",
    description:
      "Built brand voices, ran campaigns, and handled creative direction for orgs that needed more than just a logo — they needed a story.",
    tags: ["Brand Strategy", "Content", "Creative Direction"],
    icon: "✦",
  },
  {
    number: "04",
    title: "Systems & Ops",
    description:
      "Whether it's a software architecture doc or an operational checklist, I tend to think in systems. Repeatable, scalable, actually usable.",
    tags: ["Process Design", "Documentation", "Workflow"],
    icon: "⌥",
  },
];

export default function MoreThanCode() {
  return (
    <section className="py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber-500" />
            04 / BEYOND CODE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            More than
            <br />
            <span className="text-white/25">code.</span>
          </h2>
          <p className="text-sm text-white/35 max-w-sm">
            The parts of my work that don&apos;t show up in a GitHub repo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div key={card.number} className="card-glass p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{card.icon}</span>
                <span className="font-mono text-xs text-white/15">{card.number}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{card.description}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.03] rounded text-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
