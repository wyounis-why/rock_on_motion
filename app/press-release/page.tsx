export const runtime = 'edge';
const pressItems = [
  {
    type: "Article",
    outlet: "Bollywood Hungama",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://www.bollywoodhungama.com/news/features/shreya-ghoshal-vishal-dadlani-shaan-come-together-vijay-bholas-directorial-debut-mr-paanwala/",
    summary:
      "Coverage highlighting the film's music-led launch and the collaboration of Shreya Ghoshal, Vishal Dadlani, and Shaan on Vijay Bhola's directorial debut.",
  },
  {
    type: "Article",
    outlet: "Lokmat Times",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://www.lokmattimes.com/business/shreya-ghoshal-vishal-dadlani-shaan-come-together-for-vijay-bholas-directorial-debut-mr-paanwala/",
    summary:
      "A press piece covering the film's music talent, Vijay Bhola's move into filmmaking, and the worldwide YouTube release for Mr. Paanwala.",
  },
  {
    type: "Article",
    outlet: "The Tribune",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://www.tribuneindia.com/news/business/shreya-ghoshal-vishal-dadlani-shaan-come-together-for-vijay-bholas-directorial-debut-mr-paanwala/",
    summary:
      "Syndicated coverage of the film's music-led debut, its family-centered story, and its global YouTube release strategy.",
  },
  {
    type: "Article",
    outlet: "ANI",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://www.aninews.in/news/business/shreya-ghoshal-vishal-dadlani-shaan-come-together-for-vijay-bholas-directorial-debut-mr-paanwala20260402110744/",
    summary:
      "ANI's business coverage outlines the cast, musical collaborators, emotional themes, and the film's worldwide release on YouTube.",
  },
  {
    type: "Article",
    outlet: "Filmibeat",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://www.filmibeat.com/bollywood/news/2026/shreya-ghoshal-vishal-dadlani-shaan-come-together-for-vijay-bhola-s-directorial-debut-mr-paanwala-509553.html",
    summary:
      "Filmibeat coverage focused on the launch buzz around Vijay Bhola's debut film and its singer-led soundtrack lineup.",
  },
  {
    type: "Article",
    outlet: "Bollywood Spy",
    title:
      "Shreya Ghoshal, Vishal Dadlani, Shaan Come Together for Vijay Bhola's Directorial Debut Mr. Paanwala",
    href:
      "https://bollywoodspy.in/2026/04/01/shreya-ghoshal-vishal-dadlani-shaan-come-together-for-vijay-bholas-directorial-debut-mr-paanwala",
    summary: "Bollywood Spy's feature on the film's debut and its musical highlights.",
  },
  // ...add the rest of the pressItems and videoItems from rock_on as needed...
];

const videoItems = [
  {
    type: "Video",
    outlet: "Geo News",
    title: "Mr. Paanwala video feature",
    embedUrl: "https://www.youtube-nocookie.com/embed/aD4Ovk6bYmg",
    href: "https://www.youtube.com/watch?si=4nvzo7NRBCHRjYAW&v=aD4Ovk6bYmg&feature=youtu.be",
    summary:
      "A full YouTube video feature for Mr. Paanwala that can sit alongside the written press coverage.",
  },
  {
    type: "Short",
    outlet: "",
    title: "Mr. Paanwala YouTube Short",
    embedUrl: "https://www.youtube-nocookie.com/embed/t8uymoUNlRw",
    href: "https://www.youtube.com/shorts/t8uymoUNlRw?si=FLWmQac0trqzph_j",
    summary:
      "A vertical YouTube Short that adds quick social-style video coverage for the film.",
  },
];

export default function PressReleasePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="rounded-[1.5rem]">
        <div className="max-w-3xl">
          <p className="eyebrow">Press Release</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            SEE WHAT EVERYTONE IS SAYING!
          </h1>
        </div>

        <div className="mt-10">
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {videoItems.map((item) => (
              <article
                key={item.href}
                className="surface-panel-white rounded-[1.5rem] p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--background-elevated)]">
                    {item.type}
                  </span>
                  <span className="text-sm font-medium text-[var(--muted-strong)]">
                    {item.outlet}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.summary}
                </p>
                <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-black/10 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
                  <iframe
                    className={`w-full ${item.type === "Short" ? "aspect-[9/16] max-h-[32rem]" : "aspect-video"}`}
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pressItems.map((item) => (
            <article
              key={item.href}
              className="surface-panel-white rounded-[1.5rem] p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--background-elevated)]">
                  {item.type}
                </span>
                <span className="text-sm font-medium text-[var(--muted-strong)]">
                  {item.outlet}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {item.summary}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-6 px-4 py-2.5 text-sm white_important"
              >
                Open coverage
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
