export default function DashboardSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-slate-400 mb-1">Total Equity</p>
        <p className="text-xl font-semibold">-</p>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-slate-400 mb-1">30D PnL</p>
        <p className="text-xl font-semibold text-fuchsia-300">-</p>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-slate-400 mb-1">Total Trades</p>
        <p className="text-xl font-semibold">-</p>
      </div>
    </div>
  );
}
