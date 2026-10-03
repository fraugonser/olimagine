import { Schoolbell } from "next/font/google";

const schoolbell = Schoolbell({
  weight: "400",
  subsets: ["latin"],
});
export default function Hero() {
  return (
    
    <section className="relative overflow-hidden bg-[#160d24] px-6 pt-10 pb-8 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

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
            Olimagine is a digital gallery of original artwork by Oliver — a
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
        <div className="relative flex min-h-[420px] items-center justify-center">

          {/* Art has no limits */}
<div
  className={`${schoolbell.className} absolute right-0 bottom-12 z-20 -translate-x-[125px] -translate-y-[40px] -rotate-[30deg] text-left text-[30px] leading-[1.05] text-pink-400`}
>
  <div>Art</div>
  <div>has no</div>
  <div>limits ♡</div>
</div>
          {/* Pink star */}
          <img
            src="/brand/doodles/pinkstar.PNG"
            alt=""
            className="absolute right-0 bottom-12 z-20 w-12 -translate-x-[55px] rotate-12 object-contain"
          />

          {/* SPACE DOODLES */}

          {/* Moon */}
          <img
            src="/brand/doodles/moon.PNG"
            alt=""
            className="absolute right-0 top-0 z-20 w-40 -translate-x-[120px] translate-y-[50px] object-contain"
          />

          {/* Blue planet */}
          <img
            src="/brand/doodles/blueplanet.PNG"
            alt=""
            className="absolute right-0 top-0 z-20 w-12 -translate-x-[315px] translate-y-[0px] -rotate-6 object-contain"
          />

          {/* Saturn */}
          <img
            src="/brand/doodles/saturn.PNG"
            alt=""
            className="absolute left-0 top-1/2 z-20 w-24 -translate-x-[215px] -translate-y-[45px] -rotate-12 object-contain"
          />

          {/* Yellow star */}
          <img
            src="/brand/doodles/yellowstar.PNG"
            alt=""
            className="absolute left-0 top-0 z-20 w-12 -translate-x-[80px] translate-y-[25px] rotate-12 object-contain"
          />

          {/* STAR FIELD */}
          <div className="pointer-events-none absolute inset-0 z-[5]">
            <span className="absolute left-[4%] top-[12%] h-1 w-1 rounded-full bg-white/80" />
            <span className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="absolute left-[25%] top-[8%] h-1 w-1 rounded-full bg-white/90" />
            <span className="absolute left-[36%] top-[22%] h-1 w-1 rounded-full bg-white/60" />
            <span className="absolute left-[47%] top-[5%] h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="absolute left-[58%] top-[18%] h-1 w-1 rounded-full bg-white/90" />
            <span className="absolute left-[69%] top-[9%] h-1 w-1 rounded-full bg-white/60" />
            <span className="absolute left-[82%] top-[27%] h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="absolute left-[94%] top-[14%] h-1 w-1 rounded-full bg-white/90" />

            <span className="absolute left-[8%] top-[57%] h-1 w-1 rounded-full bg-white/60" />
            <span className="absolute left-[20%] top-[73%] h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="absolute left-[34%] top-[65%] h-1 w-1 rounded-full bg-white/90" />
            <span className="absolute left-[52%] top-[79%] h-1 w-1 rounded-full bg-white/60" />
            <span className="absolute left-[67%] top-[61%] h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="absolute left-[78%] top-[76%] h-1 w-1 rounded-full bg-white/90" />
            <span className="absolute left-[91%] top-[64%] h-1 w-1 rounded-full bg-white/70" />

            <span className="absolute left-[30%] top-[42%] rotate-12 text-lg text-white/70">
              +
            </span>
            <span className="absolute left-[74%] top-[40%] -rotate-12 text-sm text-white/80">
              +
            </span>
            <span className="absolute left-[88%] top-[48%] rotate-12 text-lg text-white/60">
              +
            </span>
          </div>

          {/* SMALL SPACE DETAILS */}

          {/* Tiny yellow star */}
          <img
            src="/brand/doodles/yellowstar.PNG"
            alt=""
            className="absolute right-8 top-28 z-20 w-6 rotate-12 object-contain"
          />

          {/* Tiny yellow star near Saturn */}
          <img
            src="/brand/doodles/yellowstar.PNG"
            alt=""
            className="absolute left-8 bottom-12 z-20 w-5 -rotate-12 object-contain"
          />

          {/* Tiny pink star lower space */}
          <img
            src="/brand/doodles/pinkstar.PNG"
            alt=""
            className="absolute right-52 bottom-4 z-20 w-6 rotate-12 object-contain"
          />

                    {/* Earth + glow */}
          <div className="relative z-10 -translate-x-[160px]">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.30)_0%,rgba(59,130,246,0.14)_45%,transparent_72%)]" />

            {/* Earth */}
            <div className="relative z-10">
              <img
                src="/brand/earth-logo.png"
                alt="Oliver's Earth artwork"
                className="earth-spin w-72 object-contain md:w-[380px]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}