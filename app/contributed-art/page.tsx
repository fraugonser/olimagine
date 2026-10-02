export default function ContributedArtPage() {
  const steps = [
    {
      number: "01",
      accent: "var(--pink)",
      title: "Artist creates",
      text: "An artist contributes an original work.",
    },
    {
      number: "02",
      accent: "var(--purple)",
      title: "Joins Olimagine",
      text: "Selected works become part of a future Olimagine collection.",
    },
    {
      number: "03",
      accent: "var(--cyan)",
      title: "Finds a collector",
      text: "Collectors discover and support original art on-chain.",
    },
    {
      number: "04",
      accent: "var(--green)",
      title: "Value is shared",
      text: "The distribution of proceeds is defined transparently before each collection launches.",
    },
  ];

  return (
    <main className="olimagine-page">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-32">
          <div>
            <p className="olimagine-kicker">
              Future Chapter
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.98] md:text-7xl">
              Artists helping{" "}
              <span className="text-[var(--yellow)]">artists.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
              Contributed Art is a future space where artists from around the
              world can bring original work into the Olimagine universe.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-[var(--pink)]/40 bg-[var(--surface)] px-4 py-2 text-[var(--pink)]">
                Original art
              </span>

              <span className="rounded-full border border-[var(--cyan)]/40 bg-[var(--surface)] px-4 py-2 text-[var(--cyan)]">
                On-chain
              </span>

              <span className="rounded-full border border-[var(--green)]/40 bg-[var(--surface)] px-4 py-2 text-[var(--green)]">
                Future mission
              </span>
            </div>
          </div>

          {/* playful visual */}
          <div className="relative hidden min-h-[330px] md:block">
            <div className="absolute left-[8%] top-[8%] rotate-[-9deg] text-7xl">
              🎨
            </div>

            <div className="absolute right-[12%] top-[5%] rotate-[10deg] text-5xl">
              ⭐
            </div>

            <div className="absolute left-[34%] top-[35%] flex h-40 w-40 rotate-[5deg] items-center justify-center rounded-[36px] border-2 border-[var(--pink)] bg-[var(--surface)] text-7xl shadow-[var(--glow-pink)]">
              🖼️
            </div>

            <div className="absolute bottom-[4%] left-[14%] rotate-[-8deg] text-5xl">
              ✨
            </div>

            <div className="absolute bottom-[10%] right-[9%] rotate-[7deg] text-6xl">
              🌍
            </div>

            <p className="absolute right-[4%] top-[46%] rotate-[7deg] text-2xl font-bold leading-tight text-[var(--cyan)]">
              create
              <br />
              together
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT COULD WORK */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--cyan)]">
            How it could work
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            One artwork. A bigger universe.
          </h2>

          <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
            Contributed Art is planned as a future part of Olimagine.
            Participation rules, contributor shares and collection terms will
            be defined transparently before launch.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] bg-[var(--surface)] p-6"
              style={{
                border: `1px solid color-mix(in srgb, ${step.accent} 45%, transparent)`,
              }}
            >
              <p
                className="text-sm font-bold"
                style={{ color: step.accent }}
              >
                {step.number}
              </p>

              <h3 className="mt-7 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE PHASE */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[var(--green)] opacity-[0.06]" />
          <div className="absolute -bottom-20 right-32 h-44 w-44 rounded-full bg-[var(--cyan)] opacity-[0.05]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--green)]">
              Coming in a future phase
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Become a{" "}
              <span className="text-[var(--yellow)]">
                Contributing Artist
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text-muted)]">
              Artist submissions are not open yet. Participation rules,
              contributor shares and collection terms will be published
              transparently before this part of Olimagine launches.
            </p>

            <div className="mt-8 inline-flex cursor-not-allowed rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-3 font-semibold text-[var(--text-muted)]">
              Submissions coming soon
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}