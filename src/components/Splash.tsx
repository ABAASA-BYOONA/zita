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
    /* Added 'grayscale opacity-25' to cleanly transform the yellow asset into a gray element */
    className={`pointer-events-none select-none absolute grayscale opacity-25 ${className}`}
    style={{
      transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}`,
    }}
  />
);
