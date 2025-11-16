import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
