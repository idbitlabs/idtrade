import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1 space-y-6">
        <p className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-fuchsia-900/40 text-fuchsia-200 border border-fuchsia-500/40">
          🔁 Auto DEX Trading • 2% fee ke Staking IDBit
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Mesin trading <span className="text-fuchsia-400">on-chain</span>{" "}
          yang ikut menggemukkan{" "}
          <span className="text-purple-300">reward staker IDT</span>.
        </h1>
        <p className="text-sm text-slate-300 max-w-xl">
          IDTRADE.ai menjalankan strategi spot otomatis di DEX Polygon. Setiap
          transaksi memotong 3% fee: 2% langsung dialokasikan ke kontrak staking
          IDBit, 1% ke founding. Profit bersih tetap milik pengguna.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://app.idtrade.ai"
            className="px-4 py-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-sm font-semibold"
          >
            Launch Trading App
          </Link>
          <Link
            href="/how-it-works"
            className="px-4 py-2 rounded-full border border-slate-600 hover:border-fuchsia-400 text-sm"
          >
            Lihat cara kerja
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="border border-white/10 rounded-2xl p-6 bg-black/40 shadow-xl">
          <p className="text-xs text-slate-400 mb-2">Simulasi 30 Hari • 60+ Transaksi</p>
          <p className="text-3xl font-bold text-fuchsia-300 mb-2">+180.6%</p>
          <p className="text-xs text-slate-400">
            Contoh: 1000 IDT → ~2805.98 USDT setelah 30 hari auto trading
            (martingale spot, 3% fee per trade sudah termasuk).
          </p>
        </div>
      </div>
    </section>
  );
}
