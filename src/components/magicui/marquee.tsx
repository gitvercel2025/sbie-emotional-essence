import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      vertical = false,
      reverse = false,
      pauseOnHover = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
      >
        {React.Children.map(children, (child) => (
          <div
            className={cn("flex-shrink-0", {
              "animate-marquee-horizontal group-hover:[animation-play-state:paused]":
                pauseOnHover && !vertical,
              "animate-marquee-vertical group-hover:[animation-play-state:paused]":
                pauseOnHover && vertical,
              "animate-marquee-horizontal": !pauseOnHover && !vertical,
              "animate-marquee-vertical": !pauseOnHover && vertical,
            })}
          >
            {child}
          </div>
        ))}
        {React.Children.map(children, (child) => (
          <div
            className={cn("flex-shrink-0", {
              "animate-marquee-horizontal group-hover:[animation-play-state:paused]":
                pauseOnHover && !vertical,
              "animate-marquee-vertical group-hover:[animation-play-state:paused]":
                pauseOnHover && vertical,
              "animate-marquee-horizontal": !pauseOnHover && !vertical,
              "animate-marquee-vertical": !pauseOnHover && vertical,
              "[animation-direction:reverse]": reverse,
            })}
            aria-hidden="true"
          >
            {child}
          </div>
        ))}
      </div>
    );
  },
);

Marquee.displayName = "Marquee";
