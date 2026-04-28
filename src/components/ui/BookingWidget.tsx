import { ROOM_OPTIONS, GUEST_OPTIONS } from '@/constants/Data';
import { useState } from 'react';

// Booking Form Component
const BookingWidget: React.FC = () => {
  const [checkIn, setCheckIn] = useState<string>('2026-05-01');
  const [checkOut, setCheckOut] = useState<string>('2026-05-05');
  const [guests, setGuests] = useState<string>('2a');
  const [roomType, setRoomType] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Searching availability...');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="lg:absolute lg:inset-x-0 lg:bottom-0 z-10 lg:w-3/4 m-auto p-6">
      <div className="bg-surface-muted rounded-2xl shadow-2xl p-4 md:p-6 animate-slide-up delay-400">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Check In</label>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Check Out</label>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all cursor-pointer"
            >
              {GUEST_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-white border border-brand-200 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all cursor-pointer"
            >
              {ROOM_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-text-primary/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Check Availability
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 md:gap-8 text-xs text-text-primary">
          {[
            { icon: 'M5 13l4 4L19 7', text: 'Free Cancellation' },
            { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Best Price Guarantee' },
            { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Instant Confirmation' },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
              </svg>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingWidget