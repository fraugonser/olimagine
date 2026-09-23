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
    <section className="flex justify-center px-6 py-16">
      <div className="relative aspect-square w-full max-w-[600px] overflow-hidden">
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
    </section>
  );
}