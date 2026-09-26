export default function ContributedArtPage() {
  return (
    <main className="min-h-screen bg-[#160d24] text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
            Future Chapter
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-green-400">Contributed</span>{" "}
            <span className="text-yellow-300">Art</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A future space where artists from around the world can contribute
            original works to help Olimagine grow beyond one little artist.
          </p>

        </div>
      </section>

      {/* HOW IT COULD WORK */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="text-3xl font-bold md:text-4xl">
          Artists helping artists.
        </h2>

        <p className="mt-4 max-w-2xl text-white/70">
          Contributed Art is planned as a future part of Olimagine.
          Artists will be able to contribute original works, with the
          distribution of proceeds defined transparently before each
          collection launches.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-4">

          <div className="rounded-[28px] border border-pink-400/30 bg-[#0d0918]/80 p-6">
            <div className="text-4xl">🎨</div>
            <h3 className="mt-5 text-xl font-semibold">
              Artist creates
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              An artist contributes an original work.
            </p>
          </div>

          <div className="rounded-[28px] border border-purple-400/30 bg-[#0d0918]/80 p-6">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-5 text-xl font-semibold">
              Olimagine collection
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Selected works become part of a future collection.
            </p>
          </div>

          <div className="rounded-[28px] border border-cyan-400/30 bg-[#0d0918]/80 p-6">
            <div className="text-4xl">✨</div>
            <h3 className="mt-5 text-xl font-semibold">
              Finds a collector
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Collectors discover and support original art.
            </p>
          </div>

          <div className="rounded-[28px] border border-yellow-300/30 bg-[#0d0918]/80 p-6">
            <div className="text-4xl">🤝</div>
            <h3 className="mt-5 text-xl font-semibold">
              Proceeds are shared
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Contributors receive a defined share, with the remainder
              supporting the future Olimagine Fund.
            </p>
          </div>

        </div>
      </section>

      {/* COMING LATER */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[32px] border border-green-400/30 bg-[#0d0918]/80 p-8 md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
            Coming in a future phase
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Become a Contributing Artist
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            Artist submissions are not open yet. Participation rules,
            contributor shares and collection terms will be published
            transparently before this part of Olimagine launches.
          </p>

          <button
            disabled
            className="mt-7 cursor-not-allowed rounded-full border border-white/20 px-6 py-3 font-semibold text-white/40"
          >
            Submissions coming soon
          </button>

        </div>
      </section>

    </main>
  );
}