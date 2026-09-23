"use client";

import { useState } from "react";
export default function Home() {
    const [selectedArt, setSelectedArt] = useState<{
    file: string;
    title: string;
  } | null>(null);
  return (
    <main className="min-h-screen bg-[#160d24] text-white">
      <nav className="flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
  <div className="text-xl font-bold tracking-tight">
    OLIMAGINE
  </div>

  <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
    <a href="#gallery" className="transition hover:text-white">
      Gallery
    </a>

    <a href="/fan-art" className="transition hover:text-white">
      Fan Art
    </a>

    <a href="#contributed-art" className="transition hover:text-white">
      Contributed Art
    </a>

    <a href="#roadmap" className="transition hover:text-white">
      Roadmap
    </a>
  </div>

  <button className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#160d24]">
    Connect Wallet
  </button>
</nav>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/60">
          Welcome to
        </p>

        <h1 className="text-6xl font-black tracking-tight sm:text-8xl">
          OLIMAGINE
        </h1>

        <p className="mt-6 text-xl text-white/80 sm:text-2xl">
          A little artist. A big imagination.
        </p>

        <p className="mt-3 max-w-xl text-base leading-7 text-white/55">
          A digital art world where creativity, storytelling and Solana meet.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
  href="#featured-art"
  className="rounded-full bg-white px-6 py-3 font-semibold text-[#160d24] transition hover:scale-105"
>
  Explore Art
</a>

          <button className="rounded-full border border-white/30 px-6 py-3 font-semibold">
            Connect Wallet
          </button>
        </div>
      </section>
      <section
  id="featured-art"
  className="px-6 py-24 sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">
        Featured Art
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        Inside Oliver&apos;s imagination
      </h2>

      <p className="mt-4 max-w-2xl text-white/60">
        A rotating selection of drawings from Oliver&apos;s ever-growing
        creative universe.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {[
        ["The-Band.jpg", "The Band"],
        ["Purple-Monster.JPG", "Purple Monster"],
        ["Quadriga.jpg", "Quadriga"],
        ["Bees.jpg", "Bees"],
        ["Birthday-Owl.jpg", "Birthday Owl"],
        ["Self-Portrait.jpg", "Self Portrait"],
        ["Earth.jpg", "Earth"],
        ["Clown.jpg", "Clown"],
      ].map(([file, title]) => (
  <button
    key={file}
    onClick={() => setSelectedArt({ file, title })}
    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/30"
  >
    <div className="flex aspect-square items-center justify-center overflow-hidden bg-black/20 p-2">
      <img
        src={`/art/${file}`}
        alt={title}
        className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <div className="p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-white/45">
        Original artwork by Oliver
      </p>
    </div>
  </button>
))}
    </div>
  </div>
</section>
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
    
    </main>
  );
}