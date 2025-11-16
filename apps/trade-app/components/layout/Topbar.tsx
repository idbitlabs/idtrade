import CustomConnectButton from "../web3/CustomConnectButton";

export default function Topbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-slate-200">
          IDTRADE Auto Spot Vault
        </h1>
        <CustomConnectButton />
      </div>
    </header>
  );
}
