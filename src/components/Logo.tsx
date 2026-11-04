import { cn } from "@/lib/utils";
import BrandMark from "./BrandMark";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  showText?: boolean;
}

/** Horizontal lockup: Connected S mark + STRATEGIC / eHealth Solutions wordmark. */
const Logo = ({ className, variant = "default", showText = true }: LogoProps) => {
  const white = variant === "white";
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Strategic eHealth Solutions">
      <BrandMark variant={white ? "light" : "tile"} className={white ? "h-11 w-11" : "h-10 w-10"} />
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span
            className={cn(
              "font-display text-[19px] font-extrabold tracking-[0.06em]",
              white ? "text-white" : "text-healthcare-navy",
            )}
          >
            STRATEGIC
          </span>
          <span
            className={cn(
              "mt-1 font-display text-[12.5px] font-semibold tracking-[0.01em]",
              white ? "text-[#8FDCD2]" : "text-primary",
            )}
          >
            eHealth Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
