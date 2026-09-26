"use client";

import Image from "next/image";
import { useState } from "react";
import { fanArtworks } from "@/data/fanArt";

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
    <main className="min-h-screen bg-[#160d24] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-white/50">
          Oliver&apos;s world
        </p>

        <h1 className="mt-3 text-5xl font-black sm:text-7xl">
          Fan Art
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
          Characters, stories and strange creatures Oliver loves — seen and
          redrawn through his own imagination.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {fanArtworks.map((artwork, index) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-3xl bg-white/5"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white hover:text-black"
            aria-label="Close artwork"
          >
            ×
          </button>

          {/* Previous */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white hover:text-black md:left-8"
            aria-label="Previous artwork"
          >
            ‹
          </button>

          {/* Artwork */}
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

          {/* Next */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white hover:text-black md:right-8"
            aria-label="Next artwork"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}