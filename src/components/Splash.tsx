interface SplashProps {
  className?: string;
  rotate?: number;
  flip?: boolean;
}

export const Splash = ({ className = "", rotate = 0, flip = false }: SplashProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none select-none absolute splash-mask bg-muted-foreground/30 ${className}`}
    style={{
      transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}`,
    }}
  />
);
