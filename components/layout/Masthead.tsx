import Image from "next/image";

import { MASTHEAD_META } from "@/lib/content";
import { BAND_INSET } from "@/lib/layout";
import mwGroupWhite from "@/public/images/brands/mw-group-white.png";

export function Masthead() {
  return (
    <header
      className={`${BAND_INSET} flex flex-wrap items-center justify-between gap-4 bg-graphite py-[22px]`}
    >
      <Image
        src={mwGroupWhite}
        alt="MW Group"
        priority
        className="h-20 w-auto object-contain min-[700px]:h-24"
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.13em] text-sage">
        {MASTHEAD_META}
      </p>
    </header>
  );
}
