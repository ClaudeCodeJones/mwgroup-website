import Image from "next/image";

import type { Division } from "@/lib/divisions";

/**
 * Shared cell box. The grid draws its own top and left hairline, each cell
 * draws right and bottom, which gives a single-hairline ledger with no
 * doubled lines. min-height is dropped on the single-column layout.
 */
const CELL =
  "flex flex-col gap-[26px] border-b border-r border-hairline px-[34px] pb-[34px] pt-9 min-[640px]:min-h-[360px]";

export function DivisionCard({ division }: { division: Division }) {
  const body = (
    <>
      {/* Fixed-height well so logos of differing aspect ratios share a baseline. */}
      <div className="flex h-16 items-end">
        <Image
          src={division.logo}
          alt={division.name}
          className={`${division.logoMaxHeightClass} h-auto w-auto max-w-[230px] object-contain`}
        />
      </div>

      <div className="flex items-center gap-2.5">
        <span
          className="h-2.5 w-2.5 flex-none"
          style={{ backgroundColor: division.markerColor }}
        />
        <span className="font-plex text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-graphite">
          {division.name}
        </span>
      </div>

      <p className="text-[16px] leading-[1.7] text-body text-pretty">
        {division.blurb}
      </p>

      {/* Pinned to the cell bottom regardless of blurb length. */}
      <div className="mt-auto flex items-baseline justify-between gap-4 pt-5">
        {division.href ? (
          <span className="font-plex text-[13.5px] font-semibold text-graphite border-b-2 border-graphite pb-1">
            Visit site →
          </span>
        ) : null}
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          {division.meta}
        </span>
      </div>
    </>
  );

  if (!division.href) {
    return <div className={CELL}>{body}</div>;
  }

  return (
    <a
      href={division.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${CELL} text-inherit transition-[background-color] duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-wash hover:text-inherit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graphite`}
    >
      {body}
    </a>
  );
}
