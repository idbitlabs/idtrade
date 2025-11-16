import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-lg tracking-wide">
            <span className="text-fuchsia-400">ID</span>
            <span className="text-purple-300">TRADE</span>
            <span className="text-xs text-slate-400 ml-2">.ai</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/how-it-works" className="hover:text-fuchsia-300">
            How it works
          </Link>
          <Link href="/performance" className="hover:text-fuchsia-300">
            Performance
          </Link>
          <Link href="/for-stakers" className="hover:text-fuchsia-300">
            For Stakers
          </Link>
          <Link
            href="https://web3.idbit.org"
            className="px-3 py-1 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-xs font-semibold"
          >
            Stake on IDBit
          </Link>
        </nav>
      </div>
    </header>
  );
}
