import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  showText?: boolean;
}

const Logo = ({ className, variant = "default", showText = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img 
        src={logoImage} 
        alt="Strategic eHealth Solutions Logo" 
        className="h-16 w-auto object-contain drop-shadow-lg"
      />
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-display font-bold text-lg leading-tight tracking-tight",
            variant === "white" ? "text-white" : "text-foreground"
          )}>
            Strategic eHealth
          </span>
          <span className={cn(
            "font-display font-semibold text-sm leading-tight",
            variant === "white" ? "text-white/80" : "text-secondary"
          )}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
