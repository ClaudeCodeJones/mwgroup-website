import type { StaticImageData } from "next/image";

import mawTmColor from "@/public/images/brands/maw-tm-color.png";
import mwCivilColour from "@/public/images/brands/mw-civil-colour.png";
import mwTrainplanColour from "@/public/images/brands/mw-trainplan-colour.png";
import qualcardColour from "@/public/images/brands/qualcard-colour.svg";
import sweepcoHorizontal from "@/public/images/brands/sweepco-horizontal.png";
import tempLight from "@/public/images/brands/temp-light.png";

export type Division = {
  readonly name: string;
  /** Brand colour. Used only for the 10x10 marker square, nowhere else. */
  readonly markerColor: string;
  readonly logo: StaticImageData;
  /**
   * Per-brand logo cap. These differ because the lockups have different
   * aspect ratios and differing amounts of transparent padding; the values
   * are tuned so all six logos read at the same optical weight. Do not
   * normalise them, and do not trim the source files.
   */
  readonly logoMaxHeightClass: string;
  readonly blurb: string;
  /** Mono meta text shown at the bottom right of the cell. */
  readonly meta: string;
  /** null means the cell is not a link. */
  readonly href: string | null;
};

export const DIVISIONS: readonly Division[] = [
  {
    name: "Men at Work Traffic Management",
    markerColor: "#FD4F00",
    logo: mawTmColor,
    logoMaxHeightClass: "max-h-[64px]",
    blurb:
      "Professional traffic management from five branches: Christchurch, Wellington, Nelson, Blenheim and Timaru. Qualified crews, signage and equipment, on site and ready to work.",
    meta: "menatwork.co.nz",
    href: "https://www.menatwork.co.nz",
  },
  {
    name: "MW Training and Planning",
    markerColor: "#2983C2",
    logo: mwTrainplanColour,
    logoMaxHeightClass: "max-h-[64px]",
    blurb:
      "Risk-based Traffic Management Plans (NZGTTM) designed nationwide, plus NZQA unit standard training for TTM Worker, TMO and STMS.",
    meta: "mwtrainplan.co.nz",
    href: "https://www.mwtrainplan.co.nz",
  },
  {
    // The site is not live, so this cell is deliberately not a link. When
    // mwcivil.co.nz launches, give it an href and it will render exactly
    // like the other five.
    name: "MW Civil",
    markerColor: "#EB0000",
    logo: mwCivilColour,
    // 66px rather than the handoff's 62px. That value was tuned against the
    // old Training and Planning logo; now that three of the top row are the
    // same roundel plus wordmark lockup, 66px brings this circle to 56.3px,
    // matching its two neighbours at 55.8px and 55.9px.
    logoMaxHeightClass: "max-h-[66px]",
    blurb:
      "Earthworks, drainage, roading, subdivisions and pavement construction, from Christchurch and Timaru.",
    meta: "mwcivil.co.nz · coming soon",
    href: null,
  },
  {
    name: "The Temp Company",
    markerColor: "#FCD415",
    logo: tempLight,
    logoMaxHeightClass: "max-h-[64px]",
    blurb:
      "Labour hire at short notice from Wellington, Blenheim, Christchurch and Timaru, plus permanent recruitment nationwide.",
    meta: "thetempcompany.co.nz",
    href: "https://www.thetempcompany.co.nz",
  },
  {
    name: "SweepCo",
    markerColor: "#CC2324",
    logo: sweepcoHorizontal,
    logoMaxHeightClass: "max-h-[52px]",
    blurb:
      "Mechanical sweeping for roads, car parks and construction sites, from post-construction clean-ups to ongoing site maintenance.",
    meta: "sweepco.co.nz",
    href: "https://www.sweepco.co.nz",
  },
  {
    name: "QualCard",
    markerColor: "#39B54A",
    logo: qualcardColour,
    logoMaxHeightClass: "max-h-[44px]",
    blurb:
      "Digital cards that let workers show the qualifications, competencies and inductions they hold, scannable from any phone.",
    meta: "qualcard.co.nz",
    href: "https://www.qualcard.co.nz",
  },
];
