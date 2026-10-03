export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* tiny stars */}
      <span className="absolute left-[4%] top-[12%] h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute left-[10%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/50" />
      <span className="absolute left-[18%] top-[18%] h-1 w-1 rounded-full bg-cyan-200/70" />
      <span className="absolute left-[26%] top-[38%] h-1 w-1 rounded-full bg-white/80" />
      <span className="absolute left-[34%] top-[11%] h-1.5 w-1.5 rounded-full bg-pink-200/60" />
      <span className="absolute left-[42%] top-[31%] h-1 w-1 rounded-full bg-white/60" />
      <span className="absolute left-[49%] top-[15%] h-1 w-1 rounded-full bg-white/80" />
      <span className="absolute left-[57%] top-[43%] h-1.5 w-1.5 rounded-full bg-cyan-200/60" />
      <span className="absolute left-[64%] top-[9%] h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute left-[72%] top-[30%] h-1 w-1 rounded-full bg-pink-200/70" />
      <span className="absolute left-[81%] top-[15%] h-1.5 w-1.5 rounded-full bg-white/70" />
      <span className="absolute left-[91%] top-[37%] h-1 w-1 rounded-full bg-white/80" />

      <span className="absolute left-[6%] top-[57%] h-1 w-1 rounded-full bg-white/60" />
      <span className="absolute left-[15%] top-[72%] h-1.5 w-1.5 rounded-full bg-cyan-200/60" />
      <span className="absolute left-[24%] top-[61%] h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute left-[37%] top-[78%] h-1 w-1 rounded-full bg-pink-200/60" />
      <span className="absolute left-[46%] top-[59%] h-1.5 w-1.5 rounded-full bg-white/50" />
      <span className="absolute left-[55%] top-[82%] h-1 w-1 rounded-full bg-white/80" />
      <span className="absolute left-[66%] top-[68%] h-1 w-1 rounded-full bg-cyan-200/70" />
      <span className="absolute left-[76%] top-[86%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <span className="absolute left-[86%] top-[61%] h-1 w-1 rounded-full bg-pink-200/70" />
      <span className="absolute left-[95%] top-[76%] h-1 w-1 rounded-full bg-white/70" />
{/* Bright stars */}
<span className="absolute left-[13%] top-[20%]">
  <span className="absolute left-1/2 top-1/2 h-3 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-[2px] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,1)]" />
</span>

<span className="absolute left-[53%] top-[12%] scale-75">
  <span className="absolute left-1/2 top-1/2 h-8 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cyan)] shadow-[0_0_14px_rgba(32,207,227,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cyan)] shadow-[0_0_14px_rgba(32,207,227,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
</span>

<span className="absolute left-[88%] top-[55%] scale-90">
  <span className="absolute left-1/2 top-1/2 h-8 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(244,75,165,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pink)] shadow-[0_0_14px_rgba(244,75,165,0.9)]" />
  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
</span>
      {/* doodle crosses */}
      <span className="absolute left-[8%] top-[43%] rotate-12 text-sm text-white/40">+</span>
      <span className="absolute left-[30%] top-[24%] -rotate-12 text-xs text-[var(--cyan)]/50">+</span>
      <span className="absolute left-[45%] top-[70%] rotate-12 text-sm text-white/40">+</span>
      <span className="absolute left-[61%] top-[24%] -rotate-12 text-xs text-[var(--pink)]/50">+</span>
      <span className="absolute left-[79%] top-[48%] rotate-12 text-sm text-white/40">+</span>
      <span className="absolute left-[92%] top-[20%] -rotate-12 text-xs text-[var(--cyan)]/50">+</span>
    </div>
  );
}