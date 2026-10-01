"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  generateSigner,
  publicKey,
  transactionBuilder,
} from "@metaplex-foundation/umi";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  mplCandyMachine,
  mintV1,
} from "@metaplex-foundation/mpl-core-candy-machine";
import { mplCore } from "@metaplex-foundation/mpl-core";

type MintButtonProps = {
  artworkName: string;
};

const OLIVER_WALLET =
  "4KYKW4Jfv45RxCcmrVXdCgE9oxSs1UUT5yRTkF1HECak";

const ARTWORKS: Record<
  string,
  {
    candyMachine: string;
    collection: string;
  }
> = {
  "The Band": {
    candyMachine: "E3HKFYHzgHF75QKMdek8oAyWSFioip18KFuUoEYAmjWm",
    collection: "9y2Swo6qUsHR6vULGS8xo545TLtjE8MjsSXL9J1c1ZK7",
  },

  "Purple Monster": {
    candyMachine: "9s7ZxPvLyP5YPZ22zTM7UemphVtiSEubUShAon5r9z4x",
    collection: "7HQejtbP4YJNK1vuVTbfqJcAEnu4zsspGcCJHcTrvDYT",
  },
  "Quadriga": {
  candyMachine: "Hu5ewQ33AZ7MCLZkT5mxHM7KtQpy6ApFhS66ZAaLq9f",
  collection: "EdF2i9i79hrqNdziRjzG1HXJYW1Vg8nge66AgUYzKpN3",
},
"Bees": {
  candyMachine: "8D3yW1iYTteFdeG2jgTTMMU6yKRHyt94scGdtDbsqASY",
  collection: "EH1sjVBrgmzgsUxSinpF7wtpqocvUKDWMgjAqJaureej",
},
  "Birthday Owl": {
    candyMachine: "DxVdc5RmTNDZGdypsk1NvhMZwY9LNqtNVqidZ7RsQnTF",
    collection: "7TV8YLKD5bK3kMSkjbaHZQ7DFTx2uqL2qypxQAoxGy7s",
  },
    "Self Portrait": {
    candyMachine: "3n7q9JJBzWC2o7A9yL1yrc8d6aJAb5eLwFv91rqUt8MT",
    collection: "BF5VVkkN7vkN2fWx6Y6iAYADYZFxEUNHEVp5otpKEMvJ",
  },
    "Earth": {
    candyMachine: "BHMu5Q9Rr3hV1htM8b882oZF2tPqKBqiAhfsuGDudWFc",
    collection: "7phWBduNaVj8wCq9Ggi9yjuUWrfTrWJgQYUE1cMD5wMF",
  },
    "Clown": {
    candyMachine: "J1HStQbfpML6QrrSQ8nNEGoRWMUugFpa5DnpwAL4wZY4",
    collection: "85bcGoER4Mfh6m3XR2zoLhe7rrNXaSckKDtjvmtK1b7y",
  },
};

export default function MintButton({ artworkName }: MintButtonProps) {
  const wallet = useWallet();

  const [isMinting, setIsMinting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleMint() {
    const artwork = ARTWORKS[artworkName];

    if (!artwork) {
      setMessage("Coming next ✨");
      return;
    }

    if (!wallet.connected || !wallet.publicKey) {
      setMessage("Connect your wallet first");
      return;
    }

    try {
      setIsMinting(true);
      setMessage("Waiting for wallet signature...");

      const umi = createUmi("https://api.devnet.solana.com")
        .use(mplCore())
        .use(mplCandyMachine())
        .use(walletAdapterIdentity(wallet));

      const asset = generateSigner(umi);

      const mint = mintV1(umi, {
        candyMachine: publicKey(artwork.candyMachine),
        collection: publicKey(artwork.collection),
        asset,
        mintArgs: {
          edition: {
            number: 0,
          },
          solPayment: {
            destination: publicKey(OLIVER_WALLET),
          },
        },
      });

      const result = await transactionBuilder()
        .add(mint)
        .sendAndConfirm(umi);

      console.log("Mint result:", result);
      console.log("Minted asset:", asset.publicKey);

      setMessage(`Minted! ${asset.publicKey}`);
    } catch (error) {
      console.error("Mint failed:", error);
      setMessage("Mint failed — check console");
    } finally {
      setIsMinting(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        disabled={isMinting}
        className="w-full rounded-full border border-purple-300/30 bg-purple-400/10 px-5 py-3 font-semibold text-purple-100 transition hover:border-purple-300/60 hover:bg-purple-400/20 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleMint}
      >
        {isMinting ? "Minting..." : "Mint on Solana"}
      </button>

      {message && (
        <p className="mt-2 break-all text-center text-xs text-purple-200/70">
          {message}
        </p>
      )}
    </div>
  );
}