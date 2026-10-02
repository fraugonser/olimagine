"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fanArtworks, featuredFanArtIds } from "@/data/fanArt";

export default function FanArtPreview() {
  const featuredArtworks = fanArtworks.filter((artwork) =>
    featuredFanArtIds.includes(artwork.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % featuredArtworks.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArtworks.length]);

  return (
  <section className="px-6 pb-20 pt-10 text-center">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--pink)]">
      Fan Art • Not for Sale
    </p>

    <h2 className="mt-4 text-4xl font-black sm:text-6xl">
      Stories through Oliver&apos;s{" "}
      <span className="inline-flex items-baseline">
        <span className="inline-block -rotate-6 text-[var(--cyan)]">e</span>
        <span className="inline-block translate-y-1 rotate-6 text-[var(--yellow)]">y</span>
        <span className="inline-block -translate-y-1 -rotate-3 text-[var(--green)]">e</span>
        <span className="inline-block rotate-6 text-[var(--pink)]">s</span>
      </span>
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-soft)]">
      Characters, monsters and imaginary worlds - redrawn through Oliver&apos;s
      own imagination.
    </p>
    <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.16em]">
  <span className="inline-block -rotate-2 rounded-full border border-[var(--pink)]/40 px-4 py-2 text-[var(--pink)]">
    Characters
  </span>

  <span className="inline-block rotate-2 rounded-full border border-[var(--yellow)]/40 px-4 py-2 text-[var(--yellow)]">
    Monsters
  </span>

  <span className="inline-block -rotate-1 rounded-full border border-[var(--cyan)]/40 px-4 py-2 text-[var(--cyan)]">
    Imaginary Worlds
  </span>
</div>

    <div className="relative mx-auto mt-8 aspect-square w-full max-w-[600px] overflow-hidden">
        {featuredArtworks.map((artwork, index) => (
          <Image
            key={artwork.id}
            src={artwork.image}
            alt=""
            fill
            className={`object-contain transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
       </div>
       <div className="mt-6 flex justify-center gap-2">
  {featuredArtworks.map((artwork, index) => (
    <span
      key={artwork.id}
      className={`h-2 rounded-full transition-all duration-500 ${
        index === currentIndex
          ? "w-7 bg-[var(--pink)]"
          : "w-2 bg-[var(--border)]"
      }`}
    />
  ))}
</div>
<a
  href="/fan-art"
  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--yellow)] px-7 py-3 font-bold text-[var(--surface)] transition hover:-translate-y-0.5 hover:shadow-[var(--glow-yellow)]"
>
  Explore all Fan Art
  <span
    aria-hidden="true"
    className="inline-block transition-transform group-hover:translate-x-1"
  >
    →
  </span>
</a>
      </div>
    </section>
  );
}