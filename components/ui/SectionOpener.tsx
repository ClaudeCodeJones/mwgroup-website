/**
 * The rule + eyebrow pair that opens a band. Used by the story and the
 * divisions sections. Callers set the space below via `className`.
 */
export function SectionOpener({
  eyebrow,
  className,
}: {
  eyebrow: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-[18px] h-0.5 w-11 bg-slate" />
      <p className="font-plex text-[11px] font-semibold uppercase tracking-[0.2em] text-slate">
        {eyebrow}
      </p>
    </div>
  );
}
