import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/my-vault", label: "My Vault" },
  { href: "/strategies", label: "Strategies" },
  { href: "/history", label: "History" },
  { href: "/staking-impact", label: "Staking Impact" },
  { href: "/settings", label: "Settings" }
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-56 border-r border-white/10 bg-black/40">
      <div className="px-4 py-4 font-semibold text-lg">
        <span className="text-fuchsia-400">ID</span>
        <span className="text-purple-300">TRADE</span>
      </div>
      <nav className="px-2 space-y-1 text-sm">
        {links.map((l) => {
          const active = router.pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-3 py-2 rounded-md ${
                active ? "bg-fuchsia-600 text-white" : "hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
