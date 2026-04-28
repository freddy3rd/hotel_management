

import BookingWidget from '@/components/ui/BookingWidget'
import { FadeInTextAnimation } from '@/components/ui/ControlledFadeIn';
import StarRating from '@/components/ui/StarsRating'
import { useRef, useState } from 'react';
import gsap from 'gsap';
import ville_vid from "@/assets/video/villa.mp4"

function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
  const playRef = useRef<SVGSVGElement>(null);
  const pauseRef = useRef<SVGSVGElement>(null);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
    toggleVideo();

    const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });

    if (!isPlaying) {
        // PLAY → PAUSE
        tl.to(playRef.current, {
            scale: 0.6,
            opacity: 0,
            rotate: -90,
            duration: 0.2,
            ease: "power2.out",
        }).fromTo(
            pauseRef.current,
            {
            scale: 0.6,
            opacity: 0,
            rotate: 90,
            },
            {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.35,
            ease: "power3.out",
            },
            "<"
        );
        } else {
        // PAUSE → PLAY
        tl.to(pauseRef.current, {
            scale: 0.6,
            opacity: 0,
            rotate: 90,
            duration: 0.2,
            ease: "power2.out",
        }).fromTo(
            playRef.current,
            {
            scale: 0.6,
            opacity: 0,
            rotate: -90,
            },
            {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.35,
            ease: "power3.out",
            },
            "<"
        );
        }
    };
    return (
        <section className='relative lg:h-screen min-h-screen w-full place-content-center md:p-10 border-none md:overflow-hidden bg-bg'>
            <div className='relative w-full md:h-full h-screen md:rounded-3xl overflow-clip text-bg place-content-center border-none
                before:content-[""] before:absolute before:top-0 before:right-0 before:w-12 before:h-12 before:border-none
                md:before:rounded-tr-3xl md:before:shadow-[12px_-12px_0_12px_currentColor] before:z-20
                
                after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-12 
                md:after:rounded-bl-3xl md:after:shadow-[-12px_12px_0_12px_currentColor] after:z-20 after:border-none
            '>
                {/* Overlay: Slightly deeper for better text legibility */}
                {/* <div className='absolute inset-0 bg-black/40 z-1' /> */}

                {/* Upper Left: Branding Box */}
                <div className='absolute top-0 left-0 w-56 h-64 bg-bg rounded-br-3xl z-10 text-bg place-content-center border-none
                    before:content-[""] before:absolute before:-bottom-12 before:left-0 before:w-12 before:h-12 
                    md:before:rounded-tl-3xl md:before:shadow-[-12px_-12px_0_12px_currentColor] before:border-none
                    
                    after:content-[""] after:absolute after:top-0 after:-right-12 after:w-12 after:h-12 
                    md:after:rounded-tl-3xl md:after:shadow-[-12px_-12px_0_12px_currentColor] after:border-none
                '>
                    <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                        <div className="animate-slide-up delay-200">
                            
                            <h3 className="text-text-primary font-serif text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                                Luxury<br/>
                                <span className="italic font-light text-text-secondary">Redefined</span>
                            </h3>
                        </div>
                        <div className="animate-slide-up delay-300 border-t border-border/50 pt-4">
                            <StarRating />
                            <p className="text-text-muted text-[11px] uppercase tracking-widest mt-1">5-Star Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Lower Right: Stats/Status Box */}
                <div className='absolute bottom-0 right-0 w-56 h-64 bg-bg rounded-tl-3xl z-10 text-bg border-none
                    before:content-[""] before:absolute before:-top-12 before:right-0 before:w-12 before:h-12 before:border-none
                    md:before:rounded-br-3xl md:before:shadow-[12px_12px_0_12px_currentColor]
                    
                    after:content-[""] after:absolute after:bottom-0 after:-left-12 after:w-12 after:h-12 after:border-none
                    md:after:rounded-br-3xl md:after:shadow-[12px_12px_0_12px_currentColor]
                '>
                    <div className="flex flex-col justify-between h-full p-8">
                        <div className="animate-slide-up delay-300">
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 inline-flex items-center gap-2 mb-4">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">Open Now</span>
                            </div>
                            <p className="text-text-secondary text-xs leading-relaxed font-medium">
                                24/7 Concierge<br/>Service Available
                            </p>
                        </div>
                        <div className="animate-slide-up delay-400">
                            <p className="text-text-primary font-serif text-4xl md:text-5xl font-bold tracking-tighter">42</p>
                            <p className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-semibold">Luxury Suites</p>
                        </div>
                    </div>
                </div>

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-[5] px-6 text-center">
                    <div className="overflow-hidden">

                        <FadeInTextAnimation
                            as="p"
                            reversed={isPlaying}
                            delay={0}
                            className="text-surface text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-6"
                        >
                            Welcome to Paradise
                        </FadeInTextAnimation>
                    </div>
                    <div className='overflow-hidden'>

                        <FadeInTextAnimation
                            as="h1"
                            delay={0.2}
                            reversed={isPlaying}
                            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9]"
                            >
                            <span className="inline-block">Hotel &</span>{" "}
                            <span className="italic font-light text-white/70 inline-block">Resort</span>
                        </FadeInTextAnimation>
                        {/* <FadeInTextAnimation */}
                        {/* <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9]">
                            Hotel & <span className="italic font-light text-white/70">Resort</span>
                        </h1> */}
                    </div>
                    <FadeInTextAnimation
                        as="p"
                        delay={0.4}
                        reversed={isPlaying}
                        className="text-white/60 text-sm md:text-lg max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
                    >
                        Experience timeless elegance where Mediterranean charm meets modern luxury. 
                        Nestled along the pristine coastline, crafted for the soul.

                    </FadeInTextAnimation>

                    <div className="animate-slide-up delay-300 flex flex-col md:flex-row gap-6">
                    {
                        !isPlaying&& (
                            <button className="bg-white text-text-primary px-10 py-5 rounded-full font-bold text-sm hover:bg-emerald-50 transition-all hover:scale-105 shadow-2xl cursor-pointer uppercase tracking-widest cursor-pointer">
                                Explore Rooms
                            </button>
                        )
                    }

                    <button
                        onClick={handleClick}
                        className="glass text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest border border-white/20 flex items-center gap-3 transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95 group cursor-pointer"
                    >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                            {/* PLAY ICON - Always in DOM */}
                            <svg
                                ref={playRef}
                                className="w-5 h-5 absolute"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.6 : 1 }}
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>

                            {/* PAUSE ICON - Always in DOM */}
                            <svg
                                ref={pauseRef}
                                className="w-5 h-5 absolute"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{ opacity: isPlaying ? 1 : 0, scale: isPlaying ? 1 : 0.6 }}
                            >
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        </div>

                        <span>{isPlaying ? "Pause Tour" : "Virtual Tour"}</span>
                    </button>
                    </div>
                </div>

                {/* Background Image */}
                <div className='absolute inset-0 bg-black/40 z-1' />
                <video
                    src={ville_vid}
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    preload="auto"
                    muted
                    loop
                    playsInline
                />
                
            </div>

            <BookingWidget/>
        </section>
    )
}

export default Hero