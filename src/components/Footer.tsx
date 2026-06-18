export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-[#D21404]">TZ_</span>

<div className="flex gap-6">
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-white/25 hover:text-white/60 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
