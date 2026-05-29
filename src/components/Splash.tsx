import splash from "@/assets/splash-green.png";

interface SplashProps {
  className?: string;
  rotate?: number;
  flip?: boolean;
}

export const Splash = ({ className = "", rotate = 0, flip = false }: SplashProps) => (
  <img
    src={splash}
    alt=""
    aria-hidden="true"
    loading="lazy"
    className={`pointer-events-none select-none absolute ${className}`}
    style={{
      transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}`,
    }}
  />
);
