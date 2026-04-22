export const runtime = 'edge';
export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:py-12">
      <section className="overflow-hidden rounded-[1.5rem] p-8 sm:p-10 bg-[var(--background-elevated)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="accent-pill rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] bg-[var(--accent-soft)] text-[var(--accent)]">
                  Rock On Motion
                </span>
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight text-[var(--foreground)] sm:text-6xl">
                Welcome to Rock On Motion
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                A modern streaming platform for powerful stories and premium experiences. Enjoy our curated selection and discover something new.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/press-release"
                className="rounded-full bg-[var(--accent)] text-white py-3 px-6 text-center font-semibold transition-colors hover:bg-[var(--accent-strong)]"
              >
                Press Release
              </a>
              <a
                href="/about"
                className="rounded-full border border-[var(--accent)] text-[var(--accent)] py-3 px-6 text-center font-semibold transition-colors hover:bg-[var(--accent-soft)]"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
