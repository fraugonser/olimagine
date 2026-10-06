# OLIMAGINE

### A little artist. A big imagination. An open universe.

Olimagine is an art-first platform in development that brings physical artwork on-chain through simple, non-custodial digital editions.

It begins with the artwork of Oliver, a seven-year-old non-speaking autistic artist with a huge imagination.

The current MVP runs on **Solana Devnet**. Visitors can discover Oliver's original artwork, connect their own Solana wallet, and mint selected pieces as limited digital collectibles powered by **Metaplex Core**.

**Art first. Blockchain underneath.**

🌐 **Live MVP:** https://olimagine.vercel.app/

---

## Why Olimagine?

Oliver may not communicate with words, but that doesn't mean he has nothing to say.

He communicates through drawings, gestures, sounds and sometimes little melodies. His artwork is full of monsters, strange creatures, bright colors and worlds somewhere between everyday life and imagination.

Olimagine started with a simple idea:

**Could Oliver's creativity help build something for his own future?**

As the project developed, that idea became bigger.

As the parent of an autistic child, I know how much of the conversation around autism is focused on therapy, appointments and adaptation. Those things matter — but so do joy, curiosity, creativity, experiences and having something to dream about.

Olimagine begins as Oliver's personal digital art world. The long-term ambition is to create a model where art can also help support the dreams of other autistic children.

---

# Try the MVP

> ⚠️ **Olimagine currently runs entirely on Solana Devnet.**
>
> Devnet SOL is test currency and has **no monetary value**. Do not send real SOL for testing.

## 1. Set your wallet to Solana Devnet

### Phantom

Open Phantom and go to:

**Profile → Settings → Developer Settings → Testnet Mode**

Turn **Testnet Mode** on and select **Solana Devnet**.

Official guide:  
https://help.phantom.com/articles/use-testnets-in-phantom-5997313271699

### Solflare

Open Solflare settings, select **Network**, and switch to **Devnet**.

Official guide:  
https://help.solflare.com/en/articles/6328814-differences-between-mainnet-devnet-and-testnet-and-how-to-switch-between-on-solflare

---

## 2. Get Devnet SOL

Minting one Olimagine collectible currently requires:

**0.02 Devnet SOL + Solana transaction fees**

Free test SOL is available from the Solana Devnet Faucet:

https://faucet.solana.com/

Enter your Devnet wallet address and request an airdrop.

**Devnet SOL is not real money and cannot be transferred to Mainnet.**

---

## 3. Open Olimagine

🌐 https://olimagine.vercel.app/

Explore the homepage and choose one of the **8 original artworks**.

Each artwork currently has a maximum supply of **100 digital editions on Devnet**.

---

## 4. Connect your wallet

Click **Connect Wallet** and select your Solana wallet.

Olimagine is **non-custodial**:

- your wallet remains under your control;
- Olimagine never asks for or stores your seed phrase or private key;
- every blockchain transaction must be approved and signed by you.

---

## 5. Mint an artwork

Choose an original artwork and click:

**Mint for 0.02 SOL**

Your wallet will ask you to review and sign the transaction.

After confirmation:

**Digital collectible → your wallet**

**0.02 Devnet SOL mint payment → Oliver's Devnet wallet**

The collectible is created using **Metaplex Core / Core Candy Machine**.

Artwork and metadata are stored independently using **Irys**, while ownership and mint state are recorded on Solana.

---

## 6. Watch the on-chain state update

After a successful mint, Olimagine reads the Candy Machine state directly from Solana and updates the artwork counter:

**X / 100 minted**

The Gallery also reads Oliver's wallet balance from Devnet and displays the current test balance.

These values are read directly from the blockchain rather than maintained as private Olimagine application state.

---

# 🥛 Buy me a Kakao

Visitors can also test a direct support transaction through **Buy me a Kakao**.

Choose a predefined or custom amount and approve the transaction in your wallet.

The Devnet SOL is transferred directly:

**Your wallet → Oliver's Devnet wallet**

Olimagine does not custody the funds.

All current transactions use **Devnet SOL with no monetary value**.

---

# Fan Art

Olimagine includes a separate **Fan Art** section.

These works may be inspired by existing characters or intellectual property and are intentionally separated from the mintable original collection.

**Fan Art is not minted or sold through the current MVP.**

Buy me a Kakao is general support for Oliver and is not a purchase of Fan Art or rights to an image.

---

# ⚠️ Wallet Testing Notes

### Phantom

During Devnet testing, Phantom has sometimes displayed a transaction simulation or balance warning even when the wallet contained sufficient Devnet SOL.

In our tests, the transaction could still be manually reviewed, confirmed and completed successfully.

Because wallet warnings should never be ignored blindly, **always verify that you are on Devnet, check the transaction details and confirm that your balance is sufficient before signing.**

### Solflare

The same Devnet mint flow has been successfully tested with Solflare without this warning.

### Mobile

The desktop wallet flow is currently the primary tested experience.

Mobile wallet connectivity is still being tested and may behave differently depending on the wallet/browser combination.

---

# Current MVP

The current Devnet MVP includes:

- 8 original mintable artworks
- maximum 100 editions per artwork
- fixed Devnet mint price of 0.02 SOL
- non-custodial Solana wallet connection
- user-signed mint transactions
- Metaplex Core digital collectibles
- Core Candy Machines
- decentralized artwork and metadata storage through Irys
- live on-chain minted `/100` counters
- live Oliver Devnet wallet balance
- direct Buy me a Kakao Devnet transfers
- separate non-commercial Fan Art section
- responsive web interface

---

# Architecture

For a detailed breakdown of the system architecture, blockchain flows, trust boundaries, engineering decisions and MVP limitations, see:

👉 **[Technical Architecture](docs/TECHNICAL_ARCHITECTURE.md)**

The current MVP follows a deliberately simple architecture:

**Collector → Olimagine Web App → Solana Wallet → Metaplex Core / Solana Devnet**

Minting produces two outcomes:

**Digital Asset → Collector Wallet**

**0.02 Devnet SOL mint payment → Oliver's Wallet**

Artwork and metadata are stored through **Irys**, with the metadata URI referenced by the on-chain asset.

The frontend also reads Candy Machine mint state and Oliver's Devnet wallet balance from Solana.

---

# Safety & MVP Boundaries

Olimagine is currently a **Devnet proof of concept**.

- No real SOL is required.
- Devnet SOL has no monetary value.
- Olimagine does not custody user wallets.
- Private keys and seed phrases are never stored by the application.
- Users sign their own transactions.
- The current application does not use a custom Olimagine smart contract.
- Fan Art is not part of the mintable collection.

A Mainnet launch is **not** part of the current MVP.

Before any interaction with real-value assets, the minting, payment and wallet flows require additional testing and security review.

---

# Roadmap

### Phase 1 — Current MVP

Build and validate the complete:

**art → wallet → mint → on-chain ownership**

experience on Solana Devnet.

### Phase 2 — Oliver's Digital Art World

Expand the original collection, explore unique **1/1 artworks and auctions**, and continue developing Olimagine as Oliver's personal digital gallery.

### Phase 3 — Contributed Art

Allow other artists to contribute original work to the project.

The longer-term concept is a transparent model where a contributing artist can agree to a defined proceeds split before a work is offered, allowing creators to support the mission with **art rather than only money**.

### First Measurable Milestone — $50,000 for Oliver

The first long-term financial milestone is **$50,000 in verified real-world assets belonging to Oliver**, accumulated from future real-value art activity and voluntary support.

Current Devnet activity **does not count toward this milestone**.

### Future Olimagine Fund

Only after meaningful real-world funding exists would the project begin exploring the legal and organizational structure required for a future **Olimagine Fund**.

The long-term mission is to help make individual dreams possible for autistic children, particularly those whose families lack the financial or practical means to make those experiences possible themselves.

The fund **does not exist today** and is not part of the current MVP.

---

# Technology

**Frontend**  
Next.js 16 · React · TypeScript · Tailwind CSS

**Solana**  
Solana Web3.js · Wallet Adapter · Solana Devnet

**Digital Collectibles**  
Metaplex Core · Metaplex Core Candy Machine

**Storage**  
Irys

**Deployment**  
Vercel

**Development**  
Git · GitHub · VS Code

---

# Local Development

```bash
git clone https://github.com/fraugonser/olimagine.git
cd olimagine
npm install
npm run dev
```

Then open:

`http://localhost:3000`

The application is currently configured for **Solana Devnet**.

---

## Built For

Olimagine was built as a working MVP during **Solana Fall School 2026** and the **Colosseum Crypto World's Fair hackathon**.

### A little artist. A big imagination. An open universe.