import { cn } from "@/lib/utils";

/**
 * Strategic eHealth Solutions brand mark — "Connected S".
 * An S drawn as a data path between two nodes: the brand initial as a health-information network.
 */
const S_PATH = "M70 27 C62 16 32 15 31 32 C30 48 70 49 69 67 C68 85 36 86 29 73";

interface BrandMarkProps {
  className?: string;
  /**
   * "tile" sits on a navy rounded square; "white" sits on a white rounded square (high contrast on dark backgrounds);
   * "light" is the bare mark for dark backgrounds; "plain" the bare mark for light backgrounds.
   */
  variant?: "tile" | "white" | "light" | "plain";
  title?: string;
}

const BrandMark = ({ className, variant = "tile", title }: BrandMarkProps) => {
  const stroke = variant === "light" ? "#4CC3B5" : "#29A397";
  const node = variant === "light" ? "#5AA4EC" : variant === "tile" ? "#3D8EE0" : "#125AA0";
  const mid = variant === "plain" || variant === "white" ? "#0B2545" : "#FFFFFF";
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {variant === "tile" && <rect x="0" y="0" width="100" height="100" rx="24" fill="#0B2545" />}
      {variant === "white" && <rect x="0" y="0" width="100" height="100" rx="24" fill="#FFFFFF" />}
      <path d={S_PATH} fill="none" stroke={stroke} strokeWidth="11" strokeLinecap="round" />
      <circle cx="50" cy="49.5" r="7" fill={mid} />
      <circle cx="29" cy="73" r="9" fill={node} />
      <circle cx="70" cy="27" r="9" fill="#F28C28" />
    </svg>
  );
};

export default BrandMark;
