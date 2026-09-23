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
  <section className="px-6 py-24 text-center">
    <div className="mx-auto max-w-7xl">
      <p className="text-sm uppercase tracking-[0.35em] text-white/50">
        Fan Art • Not for Sale
      </p>

      <h2 className="mt-4 text-4xl font-black sm:text-6xl">
        Stories through Oliver&apos;s eyes
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
        Characters, monsters and imaginary worlds — redrawn through Oliver&apos;s
        own imagination.
      </p>

      <div className="relative mx-auto mt-12 aspect-square w-full max-w-[600px] overflow-hidden">
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
          ? "w-6 bg-white"
          : "w-2 bg-white/30"
      }`}
    />
  ))}
</div>
<a
  href="/fan-art"
  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-[#160d24]"
>
  Explore all Fan Art
  <span aria-hidden="true">→</span>
</a>
      </div>
    </section>
  );
}