import React, { createContext, useContext, useState } from "react";

type Web3Ctx = {
  address: string | null;
  setAddress: (addr: string | null) => void;
};

const Web3Context = createContext<Web3Ctx | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);

  return (
    <Web3Context.Provider value={{ address, setAddress }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const ctx = useContext(Web3Context);
  if (!ctx) throw new Error("useWeb3 must be used inside Web3Provider");
  return ctx;
}
