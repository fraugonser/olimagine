"use client";

import BuyMeAKakao from "@/components/solana/BuyMeAKakao";
import Image from "next/image";
import { useState } from "react";
import { fanArtworks } from "@/data/fanArt";
import StarField from "@/components/ui/StarField";

export default function FanArtPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? fanArtworks.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === fanArtworks.length - 1 ? 0 : selectedIndex + 1
    );
  };

  const selectedArtwork =
    selectedIndex !== null ? fanArtworks[selectedIndex] : null;

  return (
    <main id="top" className="olimagine-page px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* HERO */}
<section className="relative -mx-6 -mt-20 overflow-hidden px-6 pt-20">
  <StarField />

  <div className="relative z-10 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          {/* LEFT */}
          <div>
            <p className="olimagine-kicker">
              Oliver&apos;s world
            </p>

            <h1 className="mt-3 text-5xl font-black sm:text-7xl">
              Fan Art
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
              Characters, stories and strange creatures Oliver loves - seen and
              redrawn through his own imagination.
            </p>

            <div className="mt-10">
              <BuyMeAKakao />
            </div>
          </div>

          {/* FEATURED FAN ART */}
<div className="relative min-h-[390px]">

  {/* Scar */}
  <div className="absolute left-[2%] top-[3%] z-10 w-[58%] -rotate-3 overflow-hidden rounded-[26px] border-2 border-[var(--pink)] bg-[var(--surface)] p-2 shadow-[var(--glow-pink)]">
    <div className="relative aspect-square overflow-hidden rounded-[19px]">
      <Image
        src="/fan-art/Scar.jpg"
        alt="Fan artwork by Oliver"
        fill
        sizes="(max-width: 768px) 55vw, 300px"
        className="object-contain"
      />
    </div>
  </div>

  {/* Kotivorobei */}
  <div className="absolute bottom-[2%] right-[2%] z-20 w-[52%] rotate-3 overflow-hidden rounded-[26px] border-2 border-[var(--cyan)] bg-[var(--surface)] p-2 shadow-[var(--glow-cyan)]">
    <div className="relative aspect-square overflow-hidden rounded-[19px]">
      <Image
        src="/fan-art/Kotivorobei.jpg"
        alt="Fan artwork by Oliver"
        fill
        sizes="(max-width: 768px) 50vw, 280px"
        className="object-contain"
      />
    </div>
  </div>

  {/* little doodle accents */}
  <span className="absolute right-[5%] top-[3%] text-3xl text-[var(--yellow)]">
    ✦
  </span>

  <span className="absolute bottom-[4%] left-[5%] text-2xl text-[var(--pink)]">
    ✦
  </span>

</div>

        </div>
</section>
        {/* GALLERY */}
<div className="mt-10 flex items-end justify-between gap-6">
  <div>
    <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--cyan)]">
      Explore the gallery
    </p>

    <p className="mt-2 text-sm text-[var(--text-muted)]">
      Click any artwork to view it full size ↗
    </p>
  </div>
</div>

<div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {fanArtworks.map((artwork, index) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:border-[var(--pink)]/60 hover:shadow-[var(--glow-pink)]"
              aria-label="Open artwork"
            >
              <div className="relative aspect-square">
                <Image
                  src={artwork.image}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface)]/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-2xl text-white transition hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--surface)]"
            aria-label="Close artwork"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-3xl text-white transition hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--surface)] md:left-8"
            aria-label="Previous artwork"
          >
            ‹
          </button>

          {/* ARTWORK */}
          <div
            className="relative flex h-[90vh] w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedArtwork.image}
              alt=""
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* NEXT */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-3xl text-white transition hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--surface)] md:right-8"
            aria-label="Next artwork"
          >
            ›
          </button>
        </div>
      )}
      {/* Back to top */}
<div className="mt-12 flex justify-center">
  <a
    href="#top"
    className="rounded-2xl border border-[var(--yellow)]/60 bg-[var(--yellow)]/5 px-7 py-3 font-semibold text-[var(--yellow)] transition-all duration-300 hover:border-[var(--yellow)] hover:bg-[var(--yellow)]/10 hover:shadow-[var(--glow-yellow)]"
  >
    ↑ Back to top
  </a>
</div>
    </main>
  );
}