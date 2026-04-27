import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";



gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  stagger?: number;

};

function VerticalRevealText({
  text,
  as: Tag = "h2",
  className = "",
  stagger = 0.15,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {text.split(" ").map((word, i) => (
        <div key={i} className="overflow-hidden inline-block mr-2">
          <Tag
            ref={(el: any) => (wordsRef.current[i] = el)}
            className={`${className} will-change-transform`}
          >
            {word}
          </Tag>
        </div>
      ))}
    </div>
  );
}


function FadeInText({
  text,
  as: Tag = "p",
  className = "",
}: Props) {
  const textRef = useRef<any>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 }, // ✅ starting state
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top top",
            // scrub: 1,
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Tag
      ref={textRef}
      className={`${className} will-change-transform`}
    >
      {text}
    </Tag>
  );
}


function FadeLeftText({
  text,
  as: Tag = "p",
  className = "",
}: Props) {
  const textRef = useRef<any>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: 40, opacity: 0 }, // ✅ starting state
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Tag
      ref={textRef}
      className={`${className} will-change-transform`}
    >
      {text}
    </Tag>
  );
}


// custom hook for text


// custom animation hook for card
type Options = {
  y?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  end?: string;
  once?: boolean;
  reverse?:boolean;
};
function useFadeUpStagger<T extends HTMLElement>(
  options: Options = {}
) {
  const {
    y = 80,
    duration = 0.5,
    stagger = 0.2,
    ease = "power3.out",
    start = "top 85%",
    end = "bottom 20%",
    once = false,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<T[]>([]);

  useEffect(() => {
    if (!itemsRef.current.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        {
          y,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [y, duration, stagger, ease, start, end, once]);

  // helper to assign refs safely
  const setRef = (el: T | null, index: number) => {
    if (el) itemsRef.current[index] = el;
  };

  return { containerRef, setRef };
}


type FadeInProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  duration?: number;
  delay?: number;
  reversed?: boolean; // Prop-based reversal
};

export type FadeInTextRef = {
  play: () => void;
  reverse: () => void;
  tl: gsap.core.Timeline | null;
};

export const useFadeInText = forwardRef<FadeInTextRef, FadeInProps>(
  ({ text, as: Tag = "p", className = "", duration = 0.8, delay = 0, reversed = false }, ref) => {
    const textRef = useRef<any>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Expose methods to parent components via ref
    useImperativeHandle(ref, () => ({
      play: () => tl.current?.play(),
      reverse: () => tl.current?.reverse(),
      tl: tl.current,
    }));

    useEffect(() => {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({ paused: true })
          .fromTo(
            textRef.current,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: duration,
              ease: "power4.out",
              delay: delay,
            }
          );

        // On Load Animation
        tl.current.play();
      });

      return () => ctx.revert();
    }, [duration, delay]);

    // Sync with 'reversed' prop if provided
    useEffect(() => {
      if (reversed) {
        tl.current?.reverse();
      } else {
        tl.current?.play();
      }
    }, [reversed]);

    return (
      <Tag ref={textRef} className={`${className} opacity-0 will-change-transform`}>
        {text}
      </Tag>
    );
  }
);

// FadeInText.displayName = "FadeInText";



export {VerticalRevealText, FadeInText, FadeLeftText, useFadeUpStagger}