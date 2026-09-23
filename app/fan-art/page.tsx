import Image from "next/image";
import { fanArtworks } from "@/data/fanArt";

export default function FanArtPage() {
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
          {fanArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="overflow-hidden rounded-3xl bg-white/5"
            >
              <div className="relative aspect-square">
                <Image
                  src={artwork.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}