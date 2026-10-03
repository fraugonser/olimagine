"use client";

import { useEffect, useState } from "react";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";

const OLIVER_WALLET =
  "4KYKW4Jfv45RxCcmrVXdCgE9oxSs1UUT5yRTkF1HECak";

export default function WalletBalance() {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    async function loadBalance() {
      try {
        const connection = new Connection(
          "https://api.devnet.solana.com",
          "confirmed"
        );

        const lamports = await connection.getBalance(
          new PublicKey(OLIVER_WALLET)
        );

        setBalance(lamports / LAMPORTS_PER_SOL);
      } catch (error) {
        console.error("Failed to load Oliver wallet balance:", error);
      }
    }

    loadBalance();
  }, []);

  return (
    <div className="mt-7 rounded-2xl border border-[var(--cyan)]/25 bg-[var(--background)]/50 p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
            Live prototype wallet
          </p>

          <p className="mt-2 text-3xl font-bold">
            {balance === null ? "Loading..." : `${balance.toFixed(3)} SOL`}
          </p>
        </div>

        <span className="text-sm font-semibold text-[var(--green)]">
          ● On-chain
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
        Live balance of Oliver&apos;s wallet on Solana Devnet. Devnet SOL
        has no monetary value.
      </p>
    </div>
  );
}