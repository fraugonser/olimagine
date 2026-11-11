
import Link from "next/link";

export default function WallOfFamePage() {
  return (
    <main className="olimagine-page mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="olimagine-kicker">
        The Heart of Olimagine
      </p>

      <h1 className="mt-5 text-5xl font-bold md:text-7xl">
        Wall of{" "}
        <span className="text-[var(--yellow)]">
          Fame.
        </span>{" "}
        💗
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-[var(--text-soft)]">
        A special place for artists who dedicate 100% of
        their mint proceeds to Olimagine. Discover their
        art and the people behind it.
      </p>

      <section className="mt-12 rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-14 text-center">
        <div className="text-5xl" aria-hidden="true">
          💗 ✦ 💛
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          Our first stars are on their way.
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-[var(--text-muted)]">
          Verified 100% supporters will appear here with
          their chosen name, optional photo, artwork page,
          and optional social profile.
          No unverified profiles are displayed.
        </p>

        <Link
          href="/contribute"
          className="mt-7 inline-block rounded-full bg-[var(--yellow)] px-7 py-3 font-bold text-[var(--primary-foreground)]"
        >
          Create Your Drop
        </Link>
      </section>

      <p className="mt-6 text-sm text-[var(--text-muted)]">
        Artist profiles will be published only with consent
        after a successful on-chain drop. Public profiles
        will have a removal request option.
      </p>
    </main>
  );
}
