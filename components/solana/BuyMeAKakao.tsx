"use client";

import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const OLIVER_WALLET = new PublicKey(
  "4KYKW4Jfv45RxCcmrVXdCgE9oxSs1UUT5yRTkF1HECak"
);

const KAKAO_OPTIONS = [0.01, 0.05, 0.1];

export default function BuyMeAKakao() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(0.01);
  const [customAmount, setCustomAmount] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const amount =
    selectedAmount === "custom"
      ? Number(customAmount)
      : selectedAmount;

  const sendKakao = async () => {
    if (!publicKey) {
      setMessage("Connect your wallet first.");
      return;
    }

    if (!signTransaction) {
      setMessage("This wallet does not support transaction signing.");
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    try {
      setSending(true);
      setMessage("");

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: OLIVER_WALLET,
          lamports: Math.round(amount * LAMPORTS_PER_SOL),
        })
      );

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash("confirmed");

      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      const signedTransaction = await signTransaction(transaction);

      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );

      await connection.confirmTransaction(
        {
          signature,
          blockhash,
          lastValidBlockHeight,
        },
        "confirmed"
      );

      setMessage(`🥛 ${amount} SOL Kakao sent! Thank you.`);
    } catch (error) {
      console.error("Kakao transaction failed:", error);
      setMessage("Transaction cancelled or failed.");
    } finally {
      setSending(false);
    }
  };

    return (
  <div className="max-w-xl border-l-2 border-[var(--yellow)] pl-5">
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--yellow)]">
      Buy me a Kakao
    </p>

    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
      Like Oliver&apos;s art? You can support him directly on Solana Devnet.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {KAKAO_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            setSelectedAmount(option);
            setMessage("");
          }}
          className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
            selectedAmount === option
              ? "border-[var(--yellow)] bg-[var(--yellow)] text-[var(--surface)] shadow-[var(--glow-yellow)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[var(--yellow)]/60"
          }`}
        >
          {option} SOL
        </button>
      ))}

      <button
        type="button"
        onClick={() => {
          setSelectedAmount("custom");
          setMessage("");
        }}
        className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
          selectedAmount === "custom"
            ? "border-[var(--yellow)] bg-[var(--yellow)] text-[var(--surface)] shadow-[var(--glow-yellow)]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[var(--yellow)]/60"
        }`}
      >
        Custom
      </button>
    </div>

    {selectedAmount === "custom" && (
      <div className="mt-3 flex items-center gap-2">
        <input
          type="number"
          min="0"
          step="0.01"
          inputMode="decimal"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(event) => {
            setCustomAmount(event.target.value);
            setMessage("");
          }}
          className="w-40 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-white outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--yellow)]"
        />

        <span className="text-sm text-[var(--text-muted)]">
          SOL
        </span>
      </div>
    )}

    <button
      onClick={sendKakao}
      disabled={
        sending ||
        !Number.isFinite(amount) ||
        amount <= 0
      }
      className="mt-4 rounded-2xl bg-[var(--yellow)] px-6 py-3 font-bold text-[var(--surface)] shadow-[var(--glow-yellow)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {sending
        ? "Sending..."
        : `Send ${
            Number.isFinite(amount) && amount > 0 ? amount : ""
          } SOL Kakao`}
    </button>

    <p className="mt-3 text-xs text-[var(--text-muted)]">
      Direct support • Solana Devnet
    </p>

    {message && (
      <p className="mt-2 text-sm text-[var(--text-soft)]">
        {message}
      </p>
    )}
  </div>
);
}