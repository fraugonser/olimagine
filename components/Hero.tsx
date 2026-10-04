import StarField from "@/components/ui/StarField";
import { Schoolbell } from "next/font/google";
const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
});
export default function Hero() {
  return (
    
    <section className="relative overflow-hidden bg-[#160d24] px-6 pt-10 pb-8 text-white">
      <StarField />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-200">
            Welcome to Olimagine
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] md:text-7xl">
            Art from
            <br />
            a different
            <br />

            <span className="inline-flex">
              <span className="inline-block -rotate-3 text-pink-500">p</span>
              <span className="inline-block rotate-2 text-orange-400">l</span>
              <span className="inline-block -rotate-2 text-yellow-300">a</span>
              <span className="inline-block rotate-3 text-green-400">n</span>
              <span className="inline-block -rotate-2 text-cyan-400">e</span>
              <span className="inline-block rotate-2 text-purple-400">t</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
            Olimagine is a digital gallery of original artwork by Oliver - a
            young artist who sees the world in his own extraordinary way.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/gallery"
              className="rounded-2xl bg-yellow-300 px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-200"
            >
              Explore Gallery →
            </a>

            <a
              href="#story"
              className="rounded-2xl border border-purple-300/60 px-7 py-4 font-semibold text-purple-200 transition duration-300 hover:scale-105 hover:bg-purple-300/10"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
<div className="relative flex min-h-[360px] items-center justify-center md:min-h-[420px]">

  {/* Responsive space scene */}
  <div className="relative aspect-[1.15/1] w-full max-w-[560px]">

    {/* Earth glow */}
    <div className="absolute bottom-[5%] left-[8%] h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.30)_0%,rgba(59,130,246,0.14)_45%,transparent_72%)]" />

    {/* Moon */}
<img
  src="/brand/doodles/moon.PNG"
  alt=""
  className="absolute right-[3%] top-[3%] z-20 w-[25%] object-contain"
/>

{/* Blue planet */}
<img
  src="/brand/doodles/blueplanet.PNG"
  alt=""
  className="absolute left-[8%] top-[5%] z-20 w-[11%] -rotate-6 object-contain"
/>

{/* Saturn */}
<img
  src="/brand/doodles/saturn.PNG"
  alt=""
  className="absolute bottom-[6%] left-[5%] z-20 w-[19%] -rotate-12 object-contain"
/>

{/* Yellow star — upper left */}
<img
  src="/brand/doodles/yellowstar.PNG"
  alt=""
  className="absolute left-[23%] top-[22%] z-20 w-[9%] rotate-12 object-contain"
/>

{/* Pink star — lower right */}
<img
  src="/brand/doodles/pinkstar.PNG"
  alt=""
  className="absolute bottom-[7%] right-[24%] z-20 w-[7%] rotate-12 object-contain"
/>

{/* Tiny yellow star — right */}
<img
  src="/brand/doodles/yellowstar.PNG"
  alt=""
  className="absolute right-[4%] top-[40%] z-20 w-[5%] rotate-12 object-contain"
/>

{/* Tiny yellow star — lower left */}
<img
  src="/brand/doodles/yellowstar.PNG"
  alt=""
  className="absolute bottom-[5%] left-[27%] z-20 w-[4%] -rotate-12 object-contain"
/>

{/* Earth */}
<img
  src="/brand/earth-logo.png"
  alt="Oliver's Earth artwork"
  className="earth-spin absolute bottom-[8%] left-1/2 z-10 w-[62%] -translate-x-1/2 object-contain"
/>

{/* Art has no limits */}
<div
  className={`${schoolbell.className} absolute bottom-[10%] right-[1%] z-30 -rotate-[18deg] text-left text-[clamp(18px,4vw,27px)] leading-[1.05] text-pink-400`}
>
  <div>Art</div>
  <div>has no</div>
  <div>limits ♡</div>
</div>

  </div>
</div>
      </div>
    </section>
  );
}