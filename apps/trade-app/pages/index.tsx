export default function IndexPage() {
  // bisa redirect ke /dashboard via useEffect, tapi untuk MVP biarkan simple:
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">IDTRADE App</h1>
      <p className="text-sm text-slate-300">
        Ini adalah dApp untuk auto spot trading yang terhubung ke ekosistem IDBit.
        Gunakan menu di samping untuk membuka Dashboard, My Vault, dan halaman lainnya.
      </p>
    </div>
  );
}
