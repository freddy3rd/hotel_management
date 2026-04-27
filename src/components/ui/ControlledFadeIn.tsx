import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";


export type FadeInTextRef = {
  play: () => void;
  reverse: () => void;
  tl: gsap.core.Timeline | null;
};

type Props = {
  children: React.ReactNode; // Changed from 'text: string' to support the span
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  duration?: number;
  delay?: number;
  reversed?: boolean;
};

export const FadeInTextAnimation = forwardRef<FadeInTextRef, Props>(
  ({ children, as: Tag = "p", className = "", duration = 0.8, delay = 0, reversed = false }, ref) => {
    const textRef = useRef<HTMLElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => tl.current?.play(),
      reverse: () => tl.current?.reverse(),
      tl: tl.current,
    }));

    useEffect(() => {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({ paused: true }).fromTo(
          textRef.current,
          { y: 60, opacity: 0 }, // Slightly deeper Y for large text
          {
            y: 0,
            opacity: 1,
            duration: duration,
            ease: "power4.out",
            delay: delay,
          }
        );
        tl.current.play();
      });
      return () => ctx.revert();
    }, [duration, delay]);

    useEffect(() => {
      reversed ? tl.current?.reverse() : tl.current?.play();
    }, [reversed]);

    return (
      <Tag ref={textRef} className={`${className} opacity-0 will-change-transform`}>
        {children}
      </Tag>
    );
  }
);