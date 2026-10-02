"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import FanArtPreview from "@/components/FanArtPreview";
import MintButton from "@/components/mint/MintButton";

export default function Home() {
  const [selectedArt, setSelectedArt] = useState<{
    file: string;
    title: string;
  } | null>(null);

  const artworks = [
    ["The-Band.jpg", "The Band"],
    ["Purple-Monster.JPG", "Purple Monster"],
    ["Quadriga.jpg", "Quadriga"],
    ["Bees.jpg", "Bees"],
    ["Birthday-Owl.jpg", "Birthday Owl"],
    ["Self-Portrait.jpg", "Self Portrait"],
    ["Earth.jpg", "Earth"],
    ["Clown.jpg", "Clown"],
  ];

  return (
    <main className="min-h-screen bg-[#160d24] text-white">
      <Hero />

      {/* FEATURED ART */}
      <section
        id="featured-art"
        className="px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--pink)]">
  Featured Art
</p>

<h2 className="text-4xl font-bold sm:text-5xl">
  Inside Oliver&apos;s{" "}

  <span className="inline-flex items-baseline font-black">
    <span className="inline-block -rotate-6 text-[var(--pink)]">i</span>
    <span className="inline-block translate-y-1 rotate-3 text-[var(--yellow)]">m</span>
    <span className="inline-block -translate-y-1 -rotate-3 text-[var(--cyan)]">a</span>
    <span className="inline-block translate-y-1 rotate-6 text-[var(--green)]">g</span>
    <span className="inline-block -rotate-6 text-[var(--orange)]">i</span>
    <span className="inline-block -translate-y-1 rotate-3 text-[var(--purple)]">n</span>
    <span className="inline-block translate-y-1 -rotate-3 text-[var(--pink)]">a</span>
    <span className="inline-block rotate-6 text-[var(--yellow)]">t</span>
    <span className="inline-block -translate-y-1 -rotate-6 text-[var(--cyan)]">i</span>
    <span className="inline-block translate-y-1 rotate-3 text-[var(--green)]">o</span>
    <span className="inline-block -rotate-3 text-[var(--orange)]">n</span>
  </span>
</h2>

            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[var(--text-soft)]">
              Each artwork on this page can be minted as a limited digital edition on Solana.
  Every mint supports Oliver directly and brings Olimagine one step
  closer to its $50K milestone - the point where preparation for the
  future Olimagine Fund begins.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold">
  <span className="text-[var(--pink)]">
    100 editions per artwork
  </span>

  <span className="text-[var(--text-muted)]">•</span>

  <span className="text-[var(--yellow)]">
    0.02 SOL + network fee
  </span>

  <span className="text-[var(--text-muted)]">•</span>

  <span className="text-[var(--cyan)]">
    Solana Devnet
  </span>
</div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {artworks.map(([file, title]) => (
              <div
                key={file}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30"
              >
                {/* Clicking the artwork opens the lightbox */}
                <button
                  type="button"
                  onClick={() => setSelectedArt({ file, title })}
                  className="block w-full text-left"
                >
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-black/20 p-2">
                    <img
                      src={`/art/${file}`}
                      alt={title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-4 pb-2">
                    <p className="font-semibold">{title}</p>

                    <p className="mt-1 text-sm text-white/45">
                      Original artwork by Oliver
                    </p>
                  </div>
                </button>

                {/* Mint is separate from the lightbox button */}
                <div className="px-4 pb-4">
                  <MintButton artworkName={title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ART LIGHTBOX */}
      {selectedArt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#160d24] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArt(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-white hover:text-black"
            >
              ×
            </button>

            <div className="flex max-h-[70vh] items-center justify-center">
              <img
                src={`/art/${selectedArt.file}`}
                alt={selectedArt.title}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-bold">
                {selectedArt.title}
              </h3>

              <p className="mt-1 text-white/50">
                Original artwork by Oliver
              </p>
            </div>
          </div>
        </div>
      )}

      <FanArtPreview />

      {/* ROADMAP */}
<section
  id="roadmap"
  className="scroll-mt-28 px-6 py-24 sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--purple)]">
        Roadmap
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        From one little gallery
        <br />
        <span className="text-[var(--yellow)]">
          to something bigger.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
        Olimagine starts with Oliver&apos;s art. Each step builds toward
        a larger universe where art can create lasting value for him
        and, one day, help other children too.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {/* 01 */}
      <div className="rounded-[28px] border border-[var(--pink)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--pink)]">
          01
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          Build the prototype
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Launch a working Olimagine MVP with wallet connection and
          digital collectibles on Solana Devnet.
        </p>
      </div>

      {/* 02 */}
      <div className="rounded-[28px] border border-[var(--orange)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--orange)]">
          02
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          First collection
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Bring selected original works by Oliver on-chain as
          collectible digital art.
        </p>
      </div>

      {/* 03 */}
      <div className="rounded-[28px] border border-[var(--yellow)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--yellow)]">
          03
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          Grow Oliver&apos;s assets
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Grow the gallery and build verified assets for Oliver
          through his original art.
        </p>
      </div>

      {/* 04 */}
      <div className="rounded-[28px] border border-[var(--green)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--green)]">
          04
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          Reach the $50K milestone
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Reach $50,000 in verified assets accumulated for Oliver
          and unlock the next chapter.
        </p>
      </div>

      {/* 05 */}
      <div className="rounded-[28px] border border-[var(--cyan)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--cyan)]">
          05
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          Prepare the Olimagine Fund
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Begin the legal and organizational work required to create
          the future Olimagine Fund.
        </p>
      </div>

      {/* 06 */}
      <div className="rounded-[28px] border border-[var(--purple)]/35 bg-[var(--surface)] p-6">
        <p className="text-sm font-bold text-[var(--purple)]">
          06
        </p>

        <h3 className="mt-3 text-xl font-semibold">
          Open the universe
        </h3>

        <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
          Introduce future charity collections and Contributed Art,
          bringing more artists into Olimagine&apos;s mission.
        </p>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}