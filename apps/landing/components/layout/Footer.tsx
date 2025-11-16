export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400 flex justify-between">
        <span>© {new Date().getFullYear()} IDTRADE.ai • part of IDBit ecosystem</span>
        <span className="hidden sm:inline">
          Auto DEX trading • Fee → Staking • Built on Polygon / IDT
        </span>
      </div>
    </footer>
  );
}
