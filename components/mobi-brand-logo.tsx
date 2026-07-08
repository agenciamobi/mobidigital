import { cn } from "@/lib/utils";

type MobiBrandLogoProps = {
  className?: string;
  markClassName?: string;
  showDescriptor?: boolean;
  descriptor?: string;
  invert?: boolean;
};

export function MobiBrandLogo({
  className,
  markClassName,
  showDescriptor = true,
  descriptor = "Digital",
  invert = false,
}: MobiBrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src="/brand/mobi-logo.svg"
        alt="MOBI"
        width={537}
        height={189}
        className={cn("h-10 w-auto object-contain", markClassName)}
        loading="eager"
        decoding="async"
      />
      {showDescriptor ? (
        <span className="leading-none">
          <span className={cn("block text-2xl font-black tracking-[-0.06em]", invert ? "text-white" : "text-ink")}>MOBI</span>
          <span className={cn("block text-xs font-black uppercase tracking-[0.22em]", invert ? "text-white/45" : "text-muted")}>{descriptor}</span>
        </span>
      ) : null}
    </span>
  );
}
