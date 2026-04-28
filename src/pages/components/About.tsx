import { FadeInText, VerticalRevealText } from "@/components/Animation"
import { ROOMS } from "@/constants/Image"
 
function About() {
  return (
   <section className="relative w-full overflow-hidden place-content-center">
        <div className="grid grid-cols-2 border-b border-brand-600/50  max-w-350 m-auto">
            <div className="p-8">
                <span className="text-brand-400 uppercase tracking-luxury text-xs font-semibold my-2">Welcome to <b>The State</b></span>
                <VerticalRevealText
                    text="The State of Elevated Living"
                    as="h2"
                    className="text-5xl md:text-7xl font-display text-brand-900 uppercase "
                />
                <FadeInText
                    text="Welcome to The State — where the art of hospitality reaches its highest form.
                    Here, we curate more than rooms and meals; we cultivate a refined state of being. A place where time slows, senses awaken, and every detail conspires to leave you restored, inspired, and quietly transformed."
                    as="p"
                    className="text-base max-w-[50ch] p-2 text-justify text-text-secondary leading-relaxed font-body"
                />

                <button className="bg-brand-600 text-surface font-display font-bold px-8 py-3 my-4 mx-2 tracking-widest text-sm transition-all duration-300 hover:bg-brand-500 hover:scale-105 active:scale-95 uppercase cursor-pointer">
                    READ MORE
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 border-green-500 p-8 items-center justify-center">
                {/* <div className="absolute inset-0 h-full w-full"> */}
                <div className="h-120 place-content-end">
                    <img 
                    src={ROOMS.image_1} 
                    alt="Background"
                    className="h-[90%] w-full object-cover"
                    />
                </div>
                <div className="h-120 place-content-start">
                    <img 
                    src={ROOMS.image_2} 
                    alt="Background"
                    className="h-[90%] w-full object-cover"
                    />
                </div>
                
            </div>

        </div>
   </section>
  )
}

export default About
