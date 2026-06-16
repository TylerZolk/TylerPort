export default function About() {
  const stats = [
    { value: "3+", label: "Years building" },
    { value: "4", label: "Major projects" },
    { value: "USC", label: "CS Program" },
    { value: "2x", label: "Hackathons" },
  ];

  return (
    <section id="about" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-amber-500" />
              00 / ABOUT
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Not just a
              <br />
              <span className="text-white/25">developer.</span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-6">
              I&apos;m a Computer Science student at the University of South Carolina with a focus on
              cybersecurity, software engineering, and building practical tools.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              I like working at the intersection of technology, design, and operations — whether
              that means building web apps, producing events, or creating systems that make teams
              move faster.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Outside of code: CMO of Inspire Columbia, technical producer for TEDx events, and
              general manager at The Loose Cockaboose. I care about making things that actually work.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card-glass p-5">
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-white/40 font-mono">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Current focus */}
            <div className="card-glass p-5">
              <div className="font-mono text-xs text-amber-500 mb-3">CURRENT FOCUS</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cybersecurity",
                  "Full-Stack Dev",
                  "Event Systems",
                  "UI/UX",
                  "FastAPI",
                  "React",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/8 rounded-full text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
