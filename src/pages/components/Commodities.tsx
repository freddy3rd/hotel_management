import { useEffect, useRef, useState } from "react";
import { COMMODITIES, FEATURES } from "@/constants/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeInText, VerticalRevealText} from "@/components/Animation";

gsap.registerPlugin(ScrollTrigger);

// Custom helper function to handle the fade effect
const fadeToText = (ref: HTMLParagraphElement | HTMLHeadingElement | null, text: string) => {
  if (!ref) return;
  const tl = gsap.timeline();
  tl.to(ref, { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" })
    .call(() => {
      ref.innerText = text; // Update the content when faded out
    })
    .to(ref, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
};

function Commodities() {
  const sectionRef = useRef<HTMLElement>(null); // Corrected type to HTMLElement
  const trackRef = useRef<HTMLDivElement>(null); // Corrected type to HTMLDivElement
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); // Corrected type to HTMLDivElement
  
  // Refs for description text fading
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  const currentIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const ctx = gsap.context(() => {
    const total = COMMODITIES.length;
    if (total === 0) return;

    const cardWidth = 420;
    const cardGap = 48; 
    const totalWidth = (total - 1) * (cardWidth + cardGap);

    gsap.to(trackRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
        end: `+=${total * 120}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        
        // OBJECT-BASED SNAPPING CONFIGURATION
        snap: {
          // Define snap points based on the number of items
          snapTo: 1 / (total - 1), 
          
          // The duration of the snap animation (seconds)
          duration: { min: 0.4, max: 0.7 }, 
          
          // Delay after the user stops scrolling before the snap kicks in
          delay: 0.1, 
          
          // Easing for the snap movement (Power2 feels most natural)
          ease: "power2.inOut" 
        },

        onUpdate: (self) => {
          const rawIndex = self.progress * (total - 1);
          const index = Math.round(rawIndex);

          if (index !== currentIndex.current) {
            currentIndex.current = index;
            setActiveIndex(index);

            fadeToText(titleRef.current, COMMODITIES[index]?.title || "");
            fadeToText(descRef.current, COMMODITIES[index]?.description || "");

            cardsRef.current.forEach((card, i) => {
              if (card) {
                gsap.to(card, {
                  scale: i === index ? 1 : 0.9,
                  opacity: i === index ? 1 : 0.3,
                  filter: i === index ? "blur(0px)" : "blur(8px)",
                  duration: 0.6,
                  ease: "power3.out",
                  overwrite: true,
                });
              }
            });
          }
        },
      },
    });

    // Initial State
    gsap.set(cardsRef.current, {
      scale: (i) => (i === 0 ? 1 : 0.9),
      opacity: (i) => (i === 0 ? 1 : 0.3),
      filter: (i) => (i === 0 ? "blur(0px)" : "blur(8px)"),
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    // Section uses full height and the default background
    <section ref={sectionRef} className="relative min-h-screen grid items-center py-20 bg-bg overflow-hidden">
      
      {/* 1. SECTION TITLE GRID (Now a separate row on top, outside the content grid) */}
      <div className="container max-w-350 m-auto grid grid-cols-12 px-10 mb-20 items-end">
        
        {/* Left: Introduction */}
        <div className="col-span-12 md:col-span-5 leading-snug order-2 md:order-1 pt-8 md:pt-0">
          <FadeInText
            text="Beyond the breathtaking views, we provide a curated selection of services designed to elevate your stay. We believe luxury should be functional, providing you with a seamless transition from the vibrant energy of the city to the quiet peace of our private sanctuary."
            as="p"
            className="text-base max-w-[50ch] text-justify text-text-secondary leading-relaxed font-body"
          />

        </div>
        
        {/* Right: Large Heading */}
        <div className="col-span-12 md:col-span-7 md:pl-16 order-1 md:order-2">
          <VerticalRevealText
            text="Unrivaled Amenities Unforgettable Stays"
            as="h2"
            className="text-5xl md:text-7xl font-display text-brand-900 uppercase"
          />
        </div>
      </div>


      {/* 2. CONTENT GRID (Carousel on left, dynamic description on right) */}
      <div className="container max-w-350 m-auto grid grid-cols-1 md:grid-cols-2 items-center px-10 gap-x-5">

        {/* LEFT: HORIZONTAL CAROUSEL TRACK */}
        <div className="relative flex items-center overflow-hidden h-125 order-2 md:order-1">
          <div
            ref={trackRef}
            className="relative flex gap-6 px-5 md:px-10" // gap-6 = 24px
          >
            {COMMODITIES.map((item, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                // Increased visual footprint
                className="min-w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-soft bg-surface border border-border-soft group transition-shadow duration-500 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: DYNAMIC DESCRIPTION & FEATURES */}
        <div className="flex flex-col justify-center p-4 md:p-4 h-full order-1 md:order-2 flex-col-reverse md:flex-col">
          
          <div>
                      {/* Dynamic Content: Title */}
            <h2
              ref={titleRef} // Hooked up for GSAP fade
              className="text-4xl md:text-5xl font-display mb-6 tracking-tight text-brand-900"
            >
              {COMMODITIES[activeIndex]?.title} {/* Initial state text */}
            </h2>

            {/* Dynamic Content: Description */}
            <p
              ref={descRef} // Hooked up for GSAP fade
              className="text-base text-text-secondary max-w-lg mb-12 font-body leading-relaxed min-h-50"
            >
              {COMMODITIES[activeIndex]?.description} {/* Initial state text */}
            </p>
          </div>

          {/* Static Content: Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full py-10 border-t border-border-soft gap-y-10 gap-x-6 mt-auto">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="text-center group flex flex-col items-center">
                
                {/* Refined Icon container */}
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-50 flex items-center justify-center mb-5 border border-brand-100 transition-colors duration-300 group-hover:bg-brand-100">
                  {feature.icon}
                </div>
                
                {/* Updated typography */}
                <h3 className="font-body text-xs font-medium uppercase tracking-wider text-brand-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-brand-500 text-xs font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Commodities;