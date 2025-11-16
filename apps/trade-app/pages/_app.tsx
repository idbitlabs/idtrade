import type { AppProps } from "next/app";
import "../styles/globals.css";
import AppShell from "../components/layout/AppShell";
import { Web3Provider } from "../context/Web3Context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </Web3Provider>
  );
}
