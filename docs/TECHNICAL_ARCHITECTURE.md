# Olimagine - Technical Architecture

## 1. Project Overview

Olimagine is an art-first web application that connects physical artwork with verifiable digital ownership on Solana. The project begins with the original artwork of Oliver, a young autistic artist, and is designed as both his personal digital gallery and a technical foundation that can later support contributed original artwork from other artists.

The current MVP allows visitors to explore Oliver's artwork, connect their own Solana wallet, and mint selected original works as limited digital collectibles. Eight original artworks are currently integrated into the Devnet prototype, with each artwork configured for a maximum edition size of 100 collectibles and a mint price of 0.02 Devnet SOL.

Olimagine is non-custodial. The application does not create or control user wallets and never receives users' private keys. Wallet interactions are initiated by the web application, but transactions are reviewed and signed by the user through their own Solana wallet before being submitted to the network.

Digital collectibles are implemented on Solana using Metaplex Core and Candy Machine infrastructure. Artwork and metadata are stored separately using decentralized storage, while mint payments are transferred on-chain to Oliver's designated wallet. The application also includes a separate Fan Art section that is not part of the collectible minting system, together with a “Buy me a Kakao” flow for direct wallet-to-wallet support.

The current implementation is a working Devnet prototype. Future concepts such as contributing-artist collections and the proposed Olimagine Fund belong to the project roadmap and are intentionally separated from the architecture of the current MVP.






## 2. System Architecture

Olimagine uses a client-side, non-custodial architecture. The web application provides the user interface and prepares blockchain interactions, while wallet authorization and transaction signing remain under the user's control.

The current MVP consists of five main layers:

### 2.1 Web Application

The Olimagine frontend is built with Next.js, TypeScript and Tailwind CSS and is deployed through Vercel.

The web application is responsible for:

- displaying artwork and project information;
- managing navigation and interactive UI states;
- connecting to supported Solana wallets;
- preparing mint and support transactions;
- reading live on-chain data such as minted edition counts and the prototype wallet balance.

The frontend does not store wallet private keys or sign transactions on behalf of users.

### 2.2 Wallet Layer

Users interact with Olimagine through their own Solana wallet.

Wallet integration is implemented with Solana Wallet Adapter. The connected wallet provides the user's public address and requests authorization whenever a transaction requires a signature.

The transaction flow follows this model:

User action → Olimagine prepares interaction → Wallet requests approval → User signs → Transaction is submitted to Solana.

This keeps custody and transaction authorization with the user rather than the application.

### 2.3 Solana Network

The current MVP operates on Solana Devnet.

Solana provides the execution and verification layer for:

- collectible mint transactions;
- ownership of minted digital assets;
- SOL transfers;
- public transaction history;
- live on-chain state used by the interface.

Devnet is used for development and demonstration. Devnet SOL has no monetary value and balances shown in the prototype must not be interpreted as real project funds.

### 2.4 Digital Collectibles

Olimagine uses Metaplex Core for digital assets and Metaplex Candy Machine infrastructure to manage the limited-edition minting process.

Each of the eight artworks in the current prototype has its own configured mint infrastructure with a maximum supply of 100 editions.

When a visitor mints an artwork:

1. the visitor selects an artwork in the Olimagine interface;
2. the application identifies the corresponding Candy Machine and collection;
3. a new asset address is generated for the collectible;
4. the mint transaction is prepared;
5. the connected wallet asks the visitor to approve and sign;
6. the transaction is submitted to Solana Devnet;
7. after confirmation, ownership of the new asset is recorded on-chain.

The interface also reads the Candy Machine state to display the current number of minted editions out of the maximum supply.

### 2.5 Artwork and Metadata

The blockchain is used for ownership and transaction state, but the artwork itself is not stored directly inside the Solana transaction.

Artwork files and collectible metadata are uploaded separately using decentralized storage through Irys. The on-chain asset references the corresponding metadata rather than embedding the full artwork file on-chain.

This separation keeps blockchain transactions lightweight while allowing the collectible to reference independently stored artwork and metadata.





## 3. Core User Flows

The current Olimagine MVP contains two main user-initiated blockchain flows: minting a limited digital collectible and sending direct support through “Buy me a Kakao”.

Both flows follow the same non-custodial principle: Olimagine can prepare a transaction, but only the connected user wallet can authorize it.

### 3.1 Limited Edition Mint Flow

A visitor can mint one of Oliver's original artworks as a limited digital collectible on Solana Devnet.

The flow is:

Visitor
→ selects an artwork
→ connects a Solana wallet
→ clicks Mint
→ Olimagine loads the artwork's Candy Machine configuration
→ Olimagine prepares the mint transaction
→ connected wallet requests approval
→ visitor signs the transaction
→ transaction is submitted to Solana Devnet
→ Metaplex Core asset is created
→ ownership is assigned to the visitor's wallet
→ Candy Machine state is updated
→ Olimagine refreshes the minted edition count

The mint price in the current prototype is 0.02 Devnet SOL. The payment destination is Oliver's designated Devnet wallet.

The important trust boundary occurs at the wallet. Olimagine prepares the blockchain interaction but cannot approve it for the visitor.

#### Simplified flow

User
  │
  │ Select artwork + Mint
  ▼
Olimagine UI
  │
  │ Prepare mint transaction
  ▼
Metaplex / Candy Machine
  │
  │ Request signature
  ▼
User Wallet
  │
  │ User approves and signs
  ▼
Solana Devnet
  │
  ├── Create Metaplex Core asset
  ├── Record ownership
  ├── Update Candy Machine state
  └── Transfer 0.02 Devnet SOL
                    │
                    ▼
              Oliver Wallet

After confirmation:

Solana Devnet
  │
  ├── New asset → User Wallet
  └── Updated mint state → Olimagine UI


### 3.2 “Buy me a Kakao” Support Flow

Fan Art is intentionally separated from the collectible system. Fan Art is displayed as non-sale artwork and is not minted through the Olimagine interface.

Visitors can instead use “Buy me a Kakao” to send direct support to Oliver's designated wallet.

The flow is:

Visitor
→ opens Fan Art
→ selects a predefined or custom SOL amount
→ connects a Solana wallet
→ clicks “Buy me a Kakao”
→ Olimagine prepares a SOL transfer
→ connected wallet requests approval
→ visitor reviews and signs
→ transaction is submitted to Solana Devnet
→ SOL is transferred directly from the visitor's wallet to Oliver's wallet
→ transaction can be independently verified on-chain

#### Simplified flow

User Wallet
     │
     │ User approves SOL transfer
     ▼
Solana Devnet
     │
     │ Direct wallet-to-wallet transfer
     ▼
Oliver Wallet

Olimagine
     │
     └── prepares the transaction,
         but never takes custody of the funds

No Olimagine-controlled intermediary wallet is used in this flow.


### 3.3 Read-Only On-Chain Data

Olimagine also reads blockchain state without requiring a user signature.

The current interface uses read-only Solana requests to display:

- the number of editions already minted from each Candy Machine;
- the current Devnet SOL balance of Oliver's prototype wallet.

These operations do not move assets or funds and therefore do not require wallet authorization.

This creates a distinction between two types of blockchain interaction in the application:

READ
Solana → Olimagine → User Interface

WRITE
Olimagine → User Wallet → User Signature → Solana





## 4. On-Chain vs Off-Chain Architecture

Olimagine intentionally separates blockchain state from application content and user interface logic.

Solana is used where public ownership, transaction history and verifiable state are useful. The website and media files remain outside the blockchain.

### 4.1 On-Chain Components

The following parts of the current MVP are recorded or executed on Solana Devnet:

| Component                      | Purpose |
| ---                            | --- 
| Metaplex Core assets           | Represent the digital collectibles minted by users |
| Asset ownership                | Records which wallet owns each minted collectible |
| Candy Machine state            | Tracks mint configuration and redeemed editions |
| Mint transactions              | Public record of collectible creation |
| SOL transfers                  | Transfers Devnet SOL during minting and Kakao support |
| Wallet balances                | Public network state read by the Olimagine interface |

Because this state exists on Solana, ownership and transactions can be independently verified without relying on the Olimagine website.

### 4.2 Decentralized Storage

Artwork files and collectible metadata are stored separately from the blockchain using decentralized storage through Irys.

The metadata contains information describing the collectible and references the corresponding artwork file. The Metaplex asset then references this metadata.

The relationship can be simplified as:

Physical artwork
→ Digital artwork file
→ Decentralized storage
→ Metadata URI
→ Metaplex Core asset
→ Owner's Solana wallet

This avoids storing large image files directly on-chain while keeping the digital asset connected to its artwork and metadata.

### 4.3 Application Layer

The following components remain part of the web application rather than blockchain state:

- page layout and visual design;
- artwork presentation and navigation;
- project story and roadmap;
- Fan Art presentation;
- wallet connection interface;
- mint and Kakao controls;
- transaction status messages;
- client-side interaction logic.

The current frontend is deployed through Vercel. It acts as an interface to the underlying Solana infrastructure, but it is not the source of truth for ownership or transaction history.

### 4.4 Trust Boundaries

The architecture separates three different responsibilities:

**Olimagine**
provides the interface, reads public blockchain state and prepares requested transactions.

**User Wallet**
holds the user's signing authority and decides whether a transaction is approved.

**Solana**
executes transactions and maintains the resulting public state.

Olimagine never requires access to the user's seed phrase or private key.

This separation is a central design decision of the MVP: the application can make blockchain interactions easier to use without taking custody of the user's wallet or assets.





## 5. Technology Stack & Engineering Decisions

The Olimagine MVP was built as a lightweight client-facing Web3 application. The technology stack was selected to keep the interface familiar to regular web users while moving ownership, authorization and collectible state to Solana.

### 5.1 Technology Stack

| Technology                        | Role in Olimagine |
| ---                               | --- |
| Next.js                           | Application framework and page structure |
| React                             | Interactive user interface and component state |
| TypeScript                        | Typed application and blockchain interaction logic |
| Tailwind CSS                      | Responsive UI and visual system |
| Solana Wallet Adapter             | Connection between Olimagine and user-controlled wallets |
| Solana Web3.js                    | Solana network interaction and SOL transfers |
| Metaplex Core                     | Digital collectible asset standard |
| Metaplex Candy Machine            | Limited-edition mint configuration and mint state |
| Umi                               | Client-side interaction with Metaplex infrastructure |
| Irys                              | Decentralized storage workflow for artwork and metadata |
| Solana Devnet                     | Development and demonstration blockchain environment |
| Vercel                            | Deployment and hosting of the web application |
| Git / GitHub                      | Version control and development history |

### 5.2 Why Solana

Olimagine requires inexpensive and user-verifiable interactions for digital collectibles and direct wallet-to-wallet transfers.

Solana provides the transaction and ownership layer used by the MVP. This allows a visitor to mint a collectible into their own wallet and independently verify the resulting asset and transaction on-chain.

For the current prototype, all blockchain interactions use Devnet so that the complete user flow can be developed and demonstrated without requiring real funds.

### 5.3 Why Metaplex Core

The project uses Metaplex Core to represent Olimagine digital collectibles.

Rather than developing a custom NFT program for functionality already provided by established Solana infrastructure, the MVP uses the Metaplex ecosystem for asset creation and ownership.

This keeps the project focused on Olimagine-specific product logic and user experience while relying on existing infrastructure for the underlying digital asset model.

### 5.4 Why Candy Machines

Each original artwork in the MVP is configured as a limited digital edition.

Candy Machine infrastructure provides the mint configuration and on-chain state required for this model. In the current Demo Day configuration, each of the eight artworks has a maximum edition size of 100.

Olimagine reads the redeemed-item state from the corresponding Candy Machine and uses it to display live mint progress in the interface.

This means the displayed mint count is derived from blockchain state rather than maintained as a separate counter in the website.

### 5.5 Non-Custodial Wallet Architecture

A central design decision was to avoid application-controlled user accounts and custodial wallets.

Visitors connect a wallet they already control. When an action requires a blockchain write, the application prepares the interaction and the wallet asks the user to approve it.

This provides a clear security boundary:

Olimagine can request an action.
The user's wallet can authorize it.
Solana can execute and verify it.

The application therefore does not need access to user seed phrases or private keys.

### 5.6 Direct Payment Architecture

Mint payments and “Buy me a Kakao” support do not pass through an Olimagine-controlled intermediary wallet.

For the current Devnet prototype, the designated recipient is Oliver's wallet.

For minting, the payment destination is included in the configured mint interaction. For Kakao support, the application prepares a direct SOL transfer from the connected user's wallet to the recipient wallet.

This reduces unnecessary custody and keeps the resulting transfers publicly verifiable on Solana.

### 5.7 Separate Treatment of Fan Art

Fan Art is deliberately separated from the collectible minting system.

The Fan Art section can display artwork inspired by existing characters or media, but these works are not exposed through the Olimagine mint interface and are not presented as commercial digital collectibles.

This separation is both a product decision and an architectural boundary: only selected original artwork is connected to the current mint infrastructure.

### 5.8 Live Blockchain State Instead of Simulated UI Data

Where practical, the MVP reads real Devnet state rather than displaying manually maintained demonstration values.

Two examples are:

- edition progress, read from Candy Machine state;
- the prototype recipient wallet's Devnet SOL balance, read from Solana.

This was useful during development because the interface itself could provide visible confirmation that an on-chain action had changed network state.

For example, after a successful mint, the redeemed edition count changes on-chain and can then be reflected in the interface.

### 5.9 Development Approach

Olimagine was developed iteratively rather than generated as a single finished application.

The implementation process included building individual interface and blockchain components, deploying collectible infrastructure for each artwork, testing wallet interactions on Devnet, minting real test assets, verifying transactions and ownership on-chain, and adjusting the application based on the results.

Git and GitHub were used to maintain the development history and separate functional milestones.

AI tools were used during development for learning, debugging, code assistance, design exploration and documentation. Architecture and product decisions were evaluated during implementation and tested against the working application rather than treating generated output as the final product.




## 6. Security, Limitations & MVP Scope

The current Olimagine implementation is a working Devnet prototype built to demonstrate the complete product flow from artwork discovery to user-signed on-chain interaction.

It is not presented as a production financial platform, marketplace, charity platform or finished mainnet deployment.

### 6.1 Wallet Security

Olimagine follows a non-custodial wallet model.

The application:

- does not request or store user seed phrases;
- does not store user private keys;
- does not sign transactions on behalf of users;
- does not take custody of user wallets or assets.

Transactions that modify blockchain state require approval through the connected user's wallet.

Public wallet addresses are used where necessary to prepare transactions, read blockchain state and display verifiable network information.

### 6.2 Development Key Management

Development and deployment credentials are kept outside the public application code.

The local Solana development keypair used during Devnet setup is stored outside the project repository and is excluded from Git tracking.

Private key material must never be included in frontend source code, committed to GitHub or exposed through the deployed application.

### 6.3 Devnet Environment

All current blockchain functionality is configured for Solana Devnet.

This includes:

- collectible minting;
- Candy Machine state;
- Metaplex Core assets;
- SOL mint payments;
- “Buy me a Kakao” transfers;
- prototype wallet balance tracking.

Devnet SOL has no monetary value.

For this reason, the wallet balance displayed by the prototype is explicitly separated from Olimagine's long-term financial milestone and must not be interpreted as real funds raised by the project.

A future mainnet deployment would require a separate production review and configuration.

### 6.4 Public Network Dependencies

The web application depends on access to Solana RPC infrastructure in order to read blockchain state and submit transactions.

The current prototype uses public Devnet infrastructure suitable for development and demonstration.

A production deployment may require more robust RPC infrastructure, monitoring and handling of rate limits, network failures and increased traffic.

### 6.5 Transaction Failure Handling

Blockchain transactions are not guaranteed to succeed simply because they were initiated by the interface.

A transaction can fail or be interrupted because of factors such as:

- wallet rejection;
- insufficient balance;
- RPC or network problems;
- transaction simulation errors;
- invalid or unavailable on-chain state.

The application therefore treats wallet approval and blockchain confirmation as separate stages of the interaction.

A successful UI action should not be considered final until the corresponding transaction has been confirmed by the network.

### 6.6 Intellectual Property Boundary

Olimagine separates original artwork used for digital collectibles from Fan Art.

Only selected original artwork is connected to the current mint infrastructure.

Fan Art is presented separately and is not offered through the minting system. This reduces the risk of treating artwork inspired by third-party characters or media as a commercial Olimagine collectible.

This separation does not itself determine or guarantee the legal status of individual artworks. Rights clearance and intellectual property review would be required before any future commercial use where third-party rights may be involved.

### 6.7 Financial and Organizational Scope

The proposed Olimagine Fund is a future project milestone and does not currently exist as a legal or charitable organization.

The current MVP therefore does not claim:

- charitable status;
- tax-deductible donations;
- operation of a registered fund;
- distribution of charitable proceeds;
- a production investment or financial product.

“Buy me a Kakao” in the current prototype represents a direct wallet-to-wallet support mechanism rather than a charitable donation system.

Future financial or charitable structures would require appropriate legal, organizational and production infrastructure before launch.

### 6.8 Current MVP Boundaries

The current deployed prototype demonstrates:

- a public Olimagine web application;
- Solana wallet connection;
- eight original artworks connected to limited-edition mint infrastructure;
- Metaplex Core digital collectible minting;
- Candy Machine edition tracking;
- user-signed Devnet transactions;
- direct Devnet SOL support transfers;
- live reading of on-chain mint and wallet state;
- decentralized artwork and metadata storage.

The current MVP intentionally does not include:

- Solana mainnet deployment;
- custodial user accounts;
- an Olimagine token;
- a custom Solana program;
- an internal secondary marketplace;
- on-chain auctions;
- a registered Olimagine Fund;
- automated revenue distribution for contributing artists;
- commercial minting of Fan Art.

These features are outside the scope of the current prototype and, where relevant, belong to later phases of the project roadmap.

### 6.9 Prototype Goal

The purpose of the MVP is to validate the core Olimagine concept with a real end-to-end implementation:

Physical artwork
→ digital presentation
→ wallet interaction
→ user authorization
→ on-chain collectible
→ independently verifiable ownership

The prototype demonstrates that this flow can operate without requiring Olimagine to control the user's wallet or hold the user's private keys.