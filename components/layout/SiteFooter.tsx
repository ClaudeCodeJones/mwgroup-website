import Image from "next/image";

import {
  FOOTER_EMAIL,
  FOOTER_META,
  FOOTER_PHONE,
  FOOTER_STATEMENT,
} from "@/lib/content";
import { BAND_INSET } from "@/lib/layout";
import mwGroupWhite from "@/public/images/brands/mw-group-white.png";

/**
 * text-sage overrides the base-layer prose link colour; the focus ring is
 * paper rather than graphite so it stays visible on the dark band.
 */
const META_LINK =
  "text-sage transition-colors duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

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
        <div className="flex flex-col gap-11">
          {/*
            The logo file carries ~10% transparent padding each side, so its
            ink sits inset from the image box. The negative margin cancels
            that padding at each size, optically aligning the roundel with
            the statement below. Do not trim the source file.
          */}
          <Image
            src={mwGroupWhite}
            alt="MW Group"
            className="-ml-2 h-20 w-auto self-start object-contain min-[700px]:-ml-[10px] min-[700px]:h-24"
          />
          <p className="font-plex text-[20px] font-medium tracking-[-0.02em] text-paper">
            {FOOTER_STATEMENT}
          </p>
        </div>

        {/*
          Meta stack. The design's line-height of 2 already anticipates
          several mono lines here. Links stay sage rather than taking the
          prose link orange, which would fight the dark band.
        */}
        <div className="flex flex-col items-start font-mono text-[11px] uppercase leading-[2] tracking-[0.13em] text-sage min-[700px]:items-end min-[700px]:text-right">
          <p>{FOOTER_META}</p>
          <a href={`tel:${FOOTER_PHONE.replace(/\s+/g, "")}`} className={META_LINK}>
            {FOOTER_PHONE}
          </a>
          <a href={`mailto:${FOOTER_EMAIL}`} className={META_LINK}>
            {FOOTER_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
