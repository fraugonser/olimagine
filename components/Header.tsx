"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { publicKey, connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleWalletClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const walletLabel =
    connected && publicKey
      ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
          .toBase58()
          .slice(-4)}`
      : "Connect";

  return (
    <header className="relative z-50 border-b border-white/15 bg-[#0d0912] px-4 md:px-6">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between md:h-24">
        {/* Logo */}
        <a href="/" className="flex min-w-0 items-center gap-1 md:gap-3">
          <div className="group relative hidden h-16 w-16 shrink-0 items-center justify-center sm:flex">
            <div className="absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.65)_0%,rgba(59,130,246,0.30)_45%,transparent_72%)] transition-all duration-300 group-hover:scale-125" />

            <div className="earth-spin relative z-10">
              <Image
                src="/brand/earth-logo.png"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <Image
            src="/brand/olimagine-logo.png"
            alt="Olimagine"
            width={300}
            height={100}
            priority
            className="h-auto w-36 object-contain sm:w-44 md:w-52"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="/gallery"
            className={`group relative py-2 transition-all duration-300 hover:scale-105 hover:text-pink-200 ${
              pathname === "/gallery" ? "text-pink-200" : ""
            }`}
          >
            Gallery
            <span
              className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-pink-400 transition-all duration-300 ${
                pathname === "/gallery"
                  ? "w-full shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </a>

          <a
            href="/fan-art"
            className={`group relative py-2 transition-all duration-300 hover:scale-105 hover:text-yellow-200 ${
              pathname === "/fan-art" ? "text-yellow-200" : ""
            }`}
          >
            Fan Art
            <span
              className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-yellow-300 transition-all duration-300 ${
                pathname === "/fan-art"
                  ? "w-full shadow-[0_0_10px_rgba(253,224,71,0.8)]"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </a>

          <a
            href="/contributed-art"
            className={`group relative py-2 transition-all duration-300 hover:scale-105 hover:text-green-200 ${
              pathname === "/contributed-art" ? "text-green-200" : ""
            }`}
          >
            Contributed Art
            <span
              className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-green-400 transition-all duration-300 ${
                pathname === "/contributed-art"
                  ? "w-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </a>

          <a
            href="/#roadmap"
            className="group relative py-2 transition-all duration-300 hover:scale-105 hover:text-purple-200"
          >
            Roadmap
            <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={handleWalletClick}
            className="rounded-xl border border-yellow-200 bg-yellow-300 px-3 py-2 text-sm font-bold whitespace-nowrap text-black shadow-[0_0_18px_rgba(253,224,71,0.20)] transition-all duration-300 hover:bg-yellow-200 md:rounded-2xl md:border-2 md:px-6 md:py-3 md:text-base"
          >
            <span className="md:hidden">{walletLabel}</span>

            <span className="hidden md:inline">
              {connected && publicKey
                ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
                    .toBase58()
                    .slice(-4)}`
                : "Connect Wallet"}
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-xl text-white md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="absolute left-0 top-full w-full border-t border-white/10 bg-[#0d0912] px-6 py-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-white/5"
            >
              Home
            </a>

            <a
              href="/gallery"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-pink-200 hover:bg-white/5"
            >
              Gallery
            </a>

            <a
              href="/fan-art"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-yellow-200 hover:bg-white/5"
            >
              Fan Art
            </a>

            <a
              href="/contributed-art"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-green-200 hover:bg-white/5"
            >
              Contributed Art
            </a>

            <a
              href="/#roadmap"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-purple-200 hover:bg-white/5"
            >
              Roadmap
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}