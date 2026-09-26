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

const KAKAO_AMOUNT = 0.01;

export default function BuyMeAKakao() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendKakao = async () => {
    if (!publicKey) {
      setMessage("Connect your wallet first.");
      return;
    }

    if (!signTransaction) {
      setMessage("This wallet does not support transaction signing.");
      return;
    }

    try {
      setSending(true);
      setMessage("");

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: OLIVER_WALLET,
          lamports: Math.round(KAKAO_AMOUNT * LAMPORTS_PER_SOL),
        })
      );

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash("confirmed");

      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // 1. Wallet signs the transaction
      const signedTransaction = await signTransaction(transaction);

      console.log("Transaction signed by wallet");

      // 2. Olimagine sends the signed transaction to Solana Devnet
      const signature = await connection.sendRawTransaction(
        signedTransaction.serialize()
      );

      console.log("Transaction sent:", signature);

      // 3. Wait for confirmation
      await connection.confirmTransaction(
        {
          signature,
          blockhash,
          lastValidBlockHeight,
        },
        "confirmed"
      );

      console.log("Transaction confirmed:", signature);

      setMessage("🥛 Kakao sent! Thank you.");
    } catch (error) {
      console.error("Kakao transaction failed:", error);
      setMessage("Transaction cancelled or failed.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <button
        onClick={sendKakao}
        disabled={sending}
        className="rounded-2xl bg-yellow-300 px-6 py-3 font-semibold text-black disabled:opacity-50"
      >
        {sending ? "Sending..." : "🥛 Buy me a Kakao"}
      </button>

      <p className="mt-2 text-sm text-white/50">
        0.01 SOL • Devnet
      </p>

      {message && (
        <p className="mt-3 text-sm text-white/70">
          {message}
        </p>
      )}
    </div>
  );
}