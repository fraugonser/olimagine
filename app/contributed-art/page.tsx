import Image from "next/image";
import StarField from "@/components/ui/StarField";
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

        {/* contributed art visual */}
<div className="relative min-h-[390px] md:min-h-[460px]">

  {/* scattered Olimagine stars */}
  <div className="absolute -bottom-12 -right-12 -top-12 -left-32 opacity-90">
    <StarField />
  </div>

  {/* colored cosmic dust */}
  <span className="absolute left-[0%] top-[12%] h-2 w-2 rounded-full bg-[var(--pink)] shadow-[0_0_16px_var(--pink)]" />
  <span className="absolute left-[8%] top-[29%] h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
  <span className="absolute left-[2%] top-[58%] h-2.5 w-2.5 rounded-full bg-[var(--cyan)] shadow-[0_0_15px_var(--cyan)]" />
  <span className="absolute left-[14%] bottom-[8%] h-1.5 w-1.5 rounded-full bg-[var(--green)]" />

  <span className="absolute right-[5%] top-[5%] h-2 w-2 rounded-full bg-[var(--yellow)] shadow-[0_0_16px_var(--yellow)]" />
  <span className="absolute right-[0%] top-[34%] h-1.5 w-1.5 rounded-full bg-[var(--pink)]" />
  <span className="absolute right-[7%] top-[63%] h-2.5 w-2.5 rounded-full bg-[var(--purple)] shadow-[0_0_16px_var(--purple)]" />
  <span className="absolute right-[16%] bottom-[3%] h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />

  {/* larger doodle stars */}
  <span className="absolute left-[3%] top-[4%] rotate-12 text-4xl text-[var(--yellow)]">
    ✦
  </span>

  <span className="absolute -left-[3%] top-[42%] -rotate-12 text-3xl text-[var(--pink)]">
    ✦
  </span>

  <span className="absolute bottom-[3%] left-[25%] rotate-12 text-3xl text-[var(--cyan)]">
    ✦
  </span>

  <span className="absolute -right-[2%] top-[18%] rotate-12 text-3xl text-[var(--green)]">
    ✦
  </span>

  <span className="absolute bottom-[13%] right-[1%] -rotate-12 text-4xl text-[var(--yellow)]">
    ✦
  </span>

  {/* little irregular dust clusters */}
  <div className="absolute left-[5%] top-[72%] flex rotate-[-18deg] gap-3">
    <span className="h-1 w-1 rounded-full bg-[var(--pink)]" />
    <span className="mt-3 h-2 w-2 rounded-full bg-[var(--yellow)]" />
    <span className="-mt-2 h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
  </div>

  <div className="absolute right-[3%] top-[48%] flex rotate-12 gap-3">
    <span className="mt-4 h-1 w-1 rounded-full bg-[var(--green)]" />
    <span className="h-2 w-2 rounded-full bg-[var(--pink)]" />
    <span className="mt-7 h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
  </div>

  {/* main illustration */}
  <div className="absolute left-1/2 top-1/2 z-10 w-[88%] max-w-[560px] -translate-x-1/2 -translate-y-1/2">
    <Image
      src="/brand/contributed-art/contributedart.png"
      alt="Artists creating together in the Olimagine universe"
      width={1200}
      height={800}
      className="h-auto w-full object-contain"
      priority
    />
  </div>

  {/* foreground particles crossing image boundary */}
  <span className="absolute left-[12%] top-[37%] z-20 h-2 w-2 rounded-full bg-[var(--cyan)]" />
  <span className="absolute right-[13%] top-[30%] z-20 h-2.5 w-2.5 rounded-full bg-[var(--yellow)]" />
  <span className="absolute bottom-[19%] left-[19%] z-20 text-2xl text-[var(--pink)]">
    ✦
  </span>

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