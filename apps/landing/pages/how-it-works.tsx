export default function HowItWorksPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">How IDTRADE.ai Works</h1>
      <p className="text-sm text-slate-300">
        Singkatnya: user deposit IDT → dikonversi ke USDT di vault → bot
        menjalankan strategi martingale spot di DEX (beli saat turun, jual +10%).
        Setiap trade memotong 3% fee (2% ke staking IDBit, 1% ke founding).
        Profit bersih tetap terakumulasi di vault user dan bisa ditarik sewaktu-waktu.
      </p>
    </section>
  );
}
