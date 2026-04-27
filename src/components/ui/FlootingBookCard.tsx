// Floating Room Card
const FloatingRoomCard: React.FC = () => (
  <div className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2 z-10 hidden lg:block animate-float">
    <div className="glass rounded-2xl p-4 w-64 hover-lift cursor-pointer group">
      <div className="relative h-32 rounded-xl overflow-hidden mb-3">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"
          alt="Suite Preview"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-brand-800">
          $450<span className="text-brand-500 font-normal">/night</span>
        </div>
      </div>
      <h4 className="text-white font-serif font-semibold mb-1">Ocean View Suite</h4>
      <p className="text-white/70 text-xs mb-2">Panoramic views with private balcony</p>
      <div className="flex gap-2">
        <span className="text-[10px] bg-white/20 text-white/90 px-2 py-1 rounded-full">King Bed</span>
        <span className="text-[10px] bg-white/20 text-white/90 px-2 py-1 rounded-full">65m²</span>
      </div>
    </div>
  </div>
);

export default FloatingRoomCard