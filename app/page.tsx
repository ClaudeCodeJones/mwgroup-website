import { Masthead } from "@/components/layout/Masthead";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DivisionCard } from "@/components/ui/DivisionCard";
import { SectionOpener } from "@/components/ui/SectionOpener";
import {
  DIVISIONS_EYEBROW,
  STORY_EYEBROW,
  STORY_HEADING,
  STORY_LEDE,
  STORY_PARAGRAPHS,
} from "@/lib/content";
import { DIVISIONS } from "@/lib/divisions";
import { BAND_INSET } from "@/lib/layout";

export default function Home() {
  return (
    <div className="flex justify-center p-6 min-[700px]:p-8 min-[1100px]:p-12">
      {/* The sheet. Square corners throughout, no radius and no shadow. */}
      <div className="w-full max-w-[1440px] border border-hairline bg-paper text-graphite">
        <Masthead />

        <main>
          <section className={`${BAND_INSET} pb-16 pt-24`}>
            <SectionOpener eyebrow={STORY_EYEBROW} className="mb-[30px]" />

            <h1 className="mb-14 font-plex text-[clamp(44px,7vw,96px)] font-semibold leading-[0.95] tracking-[-0.03em] text-graphite">
              {STORY_HEADING}
            </h1>

            <div className="grid grid-cols-1 items-start gap-10 min-[900px]:grid-cols-[1.05fr_1fr] min-[900px]:gap-24">
              <p className="font-plex text-[26px] font-medium leading-[1.45] tracking-[-0.02em] text-graphite text-pretty">
                {STORY_LEDE}
              </p>

              <div className="flex flex-col gap-[18px]">
                {STORY_PARAGRAPHS.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-[1.75] text-body text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className={`${BAND_INSET} pb-24`}>
            <SectionOpener eyebrow={DIVISIONS_EYEBROW} className="mb-10" />

            <div className="grid grid-cols-1 border-l border-t border-hairline min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
              {DIVISIONS.map((division) => (
                <DivisionCard key={division.name} division={division} />
              ))}
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
