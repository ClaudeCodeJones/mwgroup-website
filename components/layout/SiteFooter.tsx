import Image from "next/image";

import { FOOTER_META, FOOTER_STATEMENT } from "@/lib/content";
import { BAND_INSET } from "@/lib/layout";
import mwGroupWhite from "@/public/images/brands/mw-group-white.png";

export function SiteFooter() {
  return (
    <footer className={`${BAND_INSET} relative overflow-hidden bg-graphite py-16`}>
      {/*
        Decorative watermark. max-w-none keeps it at its intended 660px on
        narrow viewports, where Tailwind's preflight would otherwise shrink it.
      */}
      <Image
        src={mwGroupWhite}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-[-150px] h-auto w-[660px] max-w-none rotate-[-14deg] opacity-[0.07]"
      />

      <div className="relative flex flex-col items-start gap-10 min-[700px]:flex-row min-[700px]:items-end min-[700px]:justify-between min-[700px]:gap-16">
        <div className="flex flex-col gap-[22px]">
          <Image
            src={mwGroupWhite}
            alt="MW Group"
            className="h-[52px] w-auto self-start object-contain"
          />
          <div className="h-0.5 w-11 bg-sage" />
          <p className="font-plex text-[20px] font-medium tracking-[-0.02em] text-paper">
            {FOOTER_STATEMENT}
          </p>
        </div>

        <p className="font-mono text-[11px] uppercase leading-[2] tracking-[0.13em] text-sage min-[700px]:text-right">
          {FOOTER_META}
        </p>
      </div>
    </footer>
  );
}
