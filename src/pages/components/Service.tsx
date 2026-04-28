import { BACKGROUND } from "@/constants/Image"

function Service() {
  return (
<section className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
  {/* Background Image */}
  <img
    src={BACKGROUND.background_2}
    alt="Hotel Room"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center  px-6 md:px-16 text-white max-w-350 m-auto">
    <div className="relative flex md:flex-row flex-col gap-12 place-content-center">
       <div className="relative">
            <h2 className="text-2xl md:text-6xl font-display font-semibold mb-3">
                Want Other Special Service?
            </h2>

            <div className="w-[10%] h-0.5 bg-white mb-4" />

                <p className="max-w-xl text-sm md:text-base text-white/80 mb-6">
                     Contact us for personalized and reliable hotel & resort accommodations tailored to your needs.
                
                </p>

            <div>
       </div>
       </div>
        <button className="bg-surface text-text-primary font-display h-max font-bold px-8 py-3 my-4 mx-2 tracking-widest text-sm transition-all duration-300 hover:bg-surface-muted hover:scale-105 active:scale-95 uppercase cursor-pointer place-self-center whitespace-nowrap">
            Contact Us
        </button>

    </div>



  </div>
</section>
  )
}

export default Service
