import { VerticalRevealText, FadeLeftText, useFadeUpStagger } from "@/components/Animation";
import PriceFormatter from "@/components/ui/PriceFormatter";
import { ROOMS } from "@/constants/Data";


function Room() {
  const { containerRef, setRef } = useFadeUpStagger({
    stagger: 0.15,
    y: 60,
  });
  return (
    <section  className="py-24 bg-bg font-body">
      {/* HEADER SECTION: Clean & Airy */}
      <div className="container max-w-[1400px] mx-auto px-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div className="space-y-4">
          <span className="text-brand-400 uppercase tracking-luxury text-xs font-semibold">Your Sanctuary</span>

          <VerticalRevealText
            text="Rooms Designed for every Escape"
            as="h2"
            className="text-5xl md:text-7xl font-display leading-[1.05] text-brand-900 uppercase"
          />
          {/* <h2 className="text-5xl md:text-7xl font-display leading-[1.05] text-brand-900 uppercase">
            Rooms Designed <br />
            <span className="italic text-brand-500 lowercase capitalize">for every</span> Escape
          </h2> */}
        </div>
        <div className="md:text-right">
          <FadeLeftText
            text="Every room is more than a place to stay—it’s an experience designed around your comfort and serenity."
            className="text-text-secondary text-base md:text-lg font-light max-w-[40ch] md:ml-auto leading-relaxed"
            as="p"
          />
          {/* <p className="text-text-secondary text-base md:text-lg font-light max-w-[40ch] md:ml-auto leading-relaxed">
            Every room is more than a place to stay—it’s an experience designed around your comfort and serenity.
          </p> */}
        </div>
      </div>

      {/* ROOMS GRID */}
      <div className="container max-w-[1400px] mx-auto px-10">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="md:col-span-3 place-self-end">
              <button className="bg-brand-600 text-surface font-display font-bold px-8 py-3 tracking-widest text-sm transition-all duration-300 hover:bg-brand-500 hover:scale-105 active:scale-95 uppercase cursor-pointer">
                  SHOW MORE
              </button>
          </div>
          {ROOMS.map((room, index) => (
            <div
              ref={(el) => setRef(el, index)}
              key={index}
              className="group flex flex-col bg-surface rounded-[32px] overflow-hidden border border-border-soft transition-all duration-500 hover:shadow-soft hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Price Badge: Glassmorphism style */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white/50">
                  <div className="flex items-baseline gap-1">
                    <PriceFormatter
                      amount={room.price}
                      currency="PHP"
                      className="text-brand-800 font-semibold text-lg"
                    />
                    <span className="text-[10px] uppercase tracking-widest text-brand-500 font-bold">/ night</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-display text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {room.type}
                </h3>

                <p className="text-sm text-text-secondary font-light leading-loose mb-8 line-clamp-2">
                  {room.description}
                </p>

                {/* Amenities: Minimalist List */}
                <div className="mt-auto border-t border-brand-50 pt-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-300 mb-4">
                    In-Room Features
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {room.extras.slice(0, 3).map((extra, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-brand-700"
                        title={extra.title}
                      >
                        <span className="text-brand-400 scale-75">
                          {extra.icon}
                        </span>
                        <span className="text-[11px] font-medium tracking-wide uppercase">
                          {extra.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action: Refined Button */}
                <button className="mt-10 w-full py-4 px-6 bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold uppercase tracking-luxury rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]">
                  Reserve Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Room;