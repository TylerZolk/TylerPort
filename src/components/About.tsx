export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-[#D21404]" />
              00 / ABOUT
            </div>

            <p className="text-white/60 text-base leading-relaxed mb-5">
              I&apos;m a Computer Science student at the University of South Carolina with a focus on
              cybersecurity, software engineering, and building practical tools.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              I like working at the intersection of technology, design, and operations — whether
              that means building web apps, producing events, or creating systems that make teams
              move faster.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Outside of code: CMO of Inspire Columbia, technical producer for TEDx events, general
              manager at The Loose Cockaboose, and Director of Marketing on exec for Kappa Theta Pi.
              I care about making things that actually work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "Currently at", value: "University of South Carolina" },
              { label: "Studying", value: "Computer Science" },
              { label: "Focus areas", value: "Cybersecurity · Full-Stack · Event Ops" },
              { label: "On exec", value: "Kappa Theta Pi — Director of Marketing" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-white/6 gap-1"
              >
                <span className="font-mono text-[11px] text-white/25 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-white/60">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
