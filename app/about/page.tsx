
export const runtime = 'edge';
import VideoPlayer from "../../components/VideoPlayer";

const ABOUT_VIDEO_ASSET_ID = "films/WhatsApp Video 2026-04-15 at 2.06.26 PM.mp4";


export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <div className="surface-panel-white grid gap-10 rounded-[1.5rem] p-8 sm:p-10 lg:grid-cols-[2.1fr]">
        <div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Rock On Production
          </h1>
          <div className="prose-content mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
            <p>
              Rock On Music is now moving to new heights under the visionary directorship of Mr. Vijay Bhola who has been the Producer of high end music concerts for 4 decades.

              British Indian Director Vijay Bhola’s vision now extends to a new genre of films embracing the intricacies of facing real dilemmas and just being human in a highly entertaining way.

              Director Vijay Bhola’s debut film MR. PAANWALA premiered at The Courthouse Hotel in Central London on Mar 23rd and released on April 3rd.

              Mr. Paanwala addresses the immigrant diaspora that struggles to define a new identity for themselves as they face the dilemma of progressing in the new environment and the one they grew up in.

              Mr. Paanwala is a story about love, family, career, marriage and finding your true Self.

              Mr. Paanwala is a heartfelt and humorous story centered on a middle class family from Lucknow who run a traditional paan shop and make a life changing decision to send their child to London for higher studies. Blending sentiment, culture and comedy, the film explores family values, aspiration and the emotional ties that connect home to the diaspora.

              A contrast between the Lucknow culture and the London lifestyle. It is a rooted and real story with outstanding theatre actors performing. A film to enjoy with your family.

              A son trying to build a life in London without losing the values he was raised with in Lucknow.
              A story every immigrant family will see themselves in.

              A beautifully made film with excellent cinematography, a heart warming family story, great music and outstanding theatre actors create an entertaining film that you will always remember. It will stay in your heart long after the credits roll.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-[1.75rem]">
            <div className="mb-5 max-w-3xl">
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                Meet the Director
              </h2>
            </div>
            <VideoPlayer
              filmId="about-video"
              title="Rock On Motion Pictures About Video"
              sourceUrl={ABOUT_VIDEO_ASSET_ID}
              sourceType="video/mp4"
              showCastButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
