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
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        {KAKAO_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setSelectedAmount(option);
              setMessage("");
            }}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              selectedAmount === option
                ? "bg-yellow-300 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
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
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            selectedAmount === "custom"
              ? "bg-yellow-300 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Custom
        </button>
      </div>

      {selectedAmount === "custom" && (
        <div className="flex items-center gap-2">
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
            className="w-40 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white outline-none placeholder:text-white/40 focus:border-yellow-300"
          />

          <span className="text-sm text-white/60">SOL</span>
        </div>
      )}

      <button
        onClick={sendKakao}
        disabled={
          sending ||
          !Number.isFinite(amount) ||
          amount <= 0
        }
        className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending
          ? "Sending..."
          : `🥛 Send ${Number.isFinite(amount) && amount > 0 ? amount : ""} SOL Kakao`}
      </button>

      <p className="text-sm text-white/50">
        Direct support • Solana Devnet
      </p>

      {message && (
        <p className="text-sm text-white/70">
          {message}
        </p>
      )}
    </div>
  );
}