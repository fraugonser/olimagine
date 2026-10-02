import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white">

      {/* GALLERY HERO */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center px-6 py-14 md:grid-cols-[1fr_0.9fr]">

          {/* LEFT — TEXT */}
          <div className="relative z-20 max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--purple)]">
              Original Art
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] md:text-7xl">
              Oliver&apos;s
              <br />

              <span className="inline-flex pt-2">
                <span className="-rotate-2 text-[var(--pink)]">G</span>
                <span className="rotate-2 text-[var(--orange)]">a</span>
                <span className="-rotate-1 text-[var(--yellow)]">l</span>
                <span className="rotate-2 text-[var(--green)]">l</span>
                <span className="-rotate-2 text-[var(--cyan)]">e</span>
                <span className="rotate-1 text-[var(--cyan)]">r</span>
                <span className="-rotate-2 text-[var(--purple)]">y</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              A growing collection of Oliver&apos;s original artwork.
              Selected works will become digital collectibles on Solana,
              connecting his physical art with verifiable on-chain ownership.
            </p>
          </div>

          {/* RIGHT — OLIVER */}
<div className="relative flex min-h-[430px] items-end justify-start">

  {/* soft glow behind Oliver */}
  <div className="absolute left-[-35px] bottom-[-35px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(59,130,246,0.08)_45%,transparent_72%)]" />

  {/* Moon */}
  <Image
    src="/brand/doodles/moon.PNG"
    alt=""
    width={170}
    height={170}
    className="absolute right-[-20px] top-[5px] z-10 w-[150px] object-contain"
  />

  {/* Saturn */}
  <Image
    src="/brand/doodles/saturn.PNG"
    alt=""
    width={110}
    height={110}
    className="absolute right-[35px] bottom-[45px] z-20 w-[95px] rotate-12 object-contain"
  />

  {/* Blue planet */}
  <Image
    src="/brand/doodles/blueplanet.PNG"
    alt=""
    width={70}
    height={70}
    className="absolute left-[-45px] top-[40px] z-20 w-[60px] -rotate-12 object-contain"
  />

  {/* Yellow star */}
  <Image
    src="/brand/doodles/yellowstar.PNG"
    alt=""
    width={55}
    height={55}
    className="absolute right-[130px] top-[80px] z-20 w-[45px] rotate-12 object-contain"
  />

  {/* Pink star */}
  <Image
    src="/brand/doodles/pinkstar.PNG"
    alt=""
    width={45}
    height={45}
    className="absolute left-[-10px] bottom-[70px] z-20 w-[38px] -rotate-12 object-contain"
  />

  {/* Oliver */}
  <Image
    src="/brand/characters/Oliver-doodle.png"
    alt="Illustration of Oliver waving"
    width={500}
    height={500}
    priority
    className="relative z-10 w-[360px] object-contain md:w-[430px]"
  />

</div>
        </div>
      </section>
            {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[32px] border border-[var(--purple)]/35 bg-[var(--surface)] px-8 py-8 shadow-[0_0_40px_rgba(124,58,237,0.08)]">

          <h2 className="mb-8 text-4xl font-bold">
            <span className="text-[var(--pink)]">How</span>{" "}
            <span className="text-[var(--yellow)]">it</span>{" "}
            <span className="text-[var(--cyan)]">works</span>
          </h2>

          <div className="grid items-start gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">

            {/* 1 — Oliver creates */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-32 items-center justify-center">
                <Image
                  src="/brand/how-it-works/Oliver-creates.PNG"
                  alt="Oliver creates"
                  width={150}
                  height={150}
                  className="max-h-32 w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Oliver creates
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[var(--text-muted)]">
                Original physical art made by Oliver.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden self-center text-4xl text-[var(--cyan)] md:block">
              →
            </div>

            {/* 2 — Art goes on-chain */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-32 items-center justify-center">
                <Image
                  src="/brand/how-it-works/Art-goes-onchain.PNG"
                  alt="Art goes on-chain"
                  width={150}
                  height={150}
                  className="max-h-32 w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Art goes on-chain
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[var(--text-muted)]">
                Selected works become digital collectibles on Solana.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden self-center text-4xl text-[var(--cyan)] md:block">
              →
            </div>

            {/* 3 — Assets grow */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-32 items-center justify-center">
                <Image
                  src="/brand/how-it-works/Assets-grow.PNG"
                  alt="Oliver's assets grow"
                  width={170}
                  height={150}
                  className="max-h-32 w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Oliver&apos;s assets grow
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[var(--text-muted)]">
                Sales help build his future.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden self-center text-4xl text-[var(--cyan)] md:block">
              →
            </div>

            {/* 4 — Future Fund */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-32 items-center justify-center">
                <Image
                  src="/brand/how-it-works/fund.PNG"
                  alt="Future Olimagine Fund"
                  width={170}
                  height={150}
                  className="max-h-32 w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Future Olimagine Fund
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[var(--text-muted)]">
                At a defined milestone, we prepare the next chapter.
              </p>
            </div>

          </div>
        </div>
      </section>
     {/* FUTURE MODEL + FIRST MILESTONE */}
<section className="mx-auto max-w-7xl px-6 py-10">
  <div className="grid gap-6 md:grid-cols-2">

    {/* Future model */}
    <div className="rounded-[32px] border border-[var(--pink)]/30 bg-[var(--surface)] p-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--pink)]">
        Long-term vision
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        The future model
      </h2>

      <p className="mt-5 leading-relaxed text-[var(--text-soft)]">
        Olimagine begins as Oliver&apos;s personal gallery. As the project grows,
        the long-term vision is for future charity collections to direct{" "}
        <span className="font-semibold text-[var(--pink)]">
          90% toward the Olimagine Fund
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[var(--yellow)]">
          10% to Oliver as the artist
        </span>
        {", once the required structure is established."}
      </p>

      <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
        The Fund is a future stage of Olimagine and does not exist yet.
      </p>
    </div>

    {/* $50K milestone */}
    <div className="rounded-[32px] border border-[var(--yellow)]/30 bg-[var(--surface)] p-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--yellow)]">
        First milestone
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="text-[var(--yellow)]">$50,000</span>
        <br />
        for Oliver
      </h2>

      <p className="mt-5 leading-relaxed text-[var(--text-soft)]">
        Our first measurable milestone is $50,000 in verified assets
        accumulated for Oliver.
      </p>

      <p className="mt-4 leading-relaxed text-[var(--text-soft)]">
        Reaching this milestone unlocks the next chapter: preparing the
        future Olimagine Fund.
      </p>

      <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-0 rounded-full bg-[var(--yellow)]" />
      </div>

      <p className="mt-2 text-sm text-[var(--text-muted)]">
        The journey starts here.
      </p>
    </div>

  </div>
</section>
            {/* ORIGINAL WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="text-[var(--pink)]">Original</span>{" "}
            <span className="text-[var(--purple)]">Works</span>
          </h2>

          <p className="mt-3 text-lg text-[var(--text-muted)]">
            A growing collection of Oliver&apos;s original art.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Red */}
          <div className="overflow-hidden rounded-[28px] border border-red-400/30 bg-[var(--surface)]">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/brand/placeholders/Question-red.png"
                alt="Coming soon"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-semibold">Coming soon</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Original art by Oliver
              </p>
            </div>
          </div>

          {/* Blue */}
          <div className="overflow-hidden rounded-[28px] border border-[var(--cyan)]/30 bg-[var(--surface)]">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/brand/placeholders/Question-blue.png"
                alt="Coming soon"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-semibold">Coming soon</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Original art by Oliver
              </p>
            </div>
          </div>

          {/* Yellow */}
          <div className="overflow-hidden rounded-[28px] border border-[var(--yellow)]/30 bg-[var(--surface)]">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/brand/placeholders/Question-yellow.png"
                alt="Coming soon"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-semibold">Coming soon</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Original art by Oliver
              </p>
            </div>
          </div>

          {/* Pink */}
          <div className="overflow-hidden rounded-[28px] border border-[var(--pink)]/30 bg-[var(--surface)]">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/brand/placeholders/Question-pink.png"
                alt="Coming soon"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-lg font-semibold">Coming soon</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Original art by Oliver
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* GALLERY CLOSING */}
<section className="mx-auto max-w-7xl px-6 pb-24 pt-14">
  <div className="relative overflow-hidden rounded-[36px] border border-[var(--purple)]/25 bg-[var(--surface)] px-8 py-16 text-center md:py-20">

    <p className="text-4xl font-bold leading-tight md:text-6xl">
      <span className="text-[var(--pink)]">Every drawing</span>
      <br />
      <span className="text-[var(--yellow)]">is a new world.</span>
    </p>

    <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-muted)]">
      And this collection is only beginning.
    </p>

  </div>
</section>
    </main>
  );
}