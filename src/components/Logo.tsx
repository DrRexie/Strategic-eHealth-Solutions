import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  const isWhite = variant === "white";
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon: Healthcare cross + Digital connectivity */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer circle with gradient */}
          <circle cx="20" cy="20" r="18" className={isWhite ? "stroke-white" : "stroke-primary"} strokeWidth="2" fill="none" />
          
          {/* Healthcare cross */}
          <path
            d="M20 10V30M10 20H30"
            className={isWhite ? "stroke-white" : "stroke-primary"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Digital nodes */}
          <circle cx="10" cy="10" r="3" className={isWhite ? "fill-white/80" : "fill-secondary"} />
          <circle cx="30" cy="10" r="3" className={isWhite ? "fill-white/80" : "fill-secondary"} />
          <circle cx="10" cy="30" r="3" className={isWhite ? "fill-white/80" : "fill-secondary"} />
          <circle cx="30" cy="30" r="3" className={isWhite ? "fill-white/80" : "fill-secondary"} />
          
          {/* Connection lines */}
          <path
            d="M12 12L18 18M28 12L22 18M12 28L18 22M28 28L22 22"
            className={isWhite ? "stroke-white/60" : "stroke-accent"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className={cn(
          "font-display font-bold text-lg leading-tight tracking-tight",
          isWhite ? "text-white" : "text-foreground"
        )}>
          Strategic eHealth
        </span>
        <span className={cn(
          "font-display font-semibold text-sm leading-tight",
          isWhite ? "text-white/80" : "text-secondary"
        )}>
          Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
