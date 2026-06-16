const posts = [
  {
    number: "01",
    title: "What building hackathon projects taught me about real deadlines",
    category: "Engineering",
    read: "4 min",
    excerpt:
      "There's something clarifying about a 24-hour deadline. You stop debating architecture and start shipping. Here's what I actually learned.",
    date: "Jun 2025",
  },
  {
    number: "02",
    title: "Why cybersecurity needs better user experience",
    category: "Security",
    read: "5 min",
    excerpt:
      "Most security tooling is built for people who already understand security. That's a problem when the biggest vulnerabilities are human ones.",
    date: "May 2025",
  },
  {
    number: "03",
    title: "Designing systems that people actually want to use",
    category: "Design",
    read: "3 min",
    excerpt:
      "The gap between a system that works and one that gets used is almost always a design problem, not a technical one.",
    date: "Apr 2025",
  },
];

export default function Thoughts() {
  return (
    <section id="thoughts" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-amber-500" />
            05 / THOUGHTS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Notes &amp;
            <br />
            <span className="text-white/25">writing.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <article
              key={post.number}
              className="card-glass p-6 group cursor-pointer hover:border-white/12 transition-all"
            >
              <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
                <span className="font-mono text-xs text-white/15 mt-1 flex-shrink-0 w-5">
                  {post.number}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-amber-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="w-px h-3 bg-white/10" />
                    <span className="font-mono text-[10px] text-white/25">{post.read} read</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-white/40 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-3">
                  <span className="font-mono text-xs text-white/25">{post.date}</span>
                  <span className="text-amber-400 text-lg group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
