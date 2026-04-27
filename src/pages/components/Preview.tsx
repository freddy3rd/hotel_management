import { LayoutDashboard, BedDouble, TrendingUp, CreditCard, Settings, Bell } from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BedDouble, label: 'Rooms' },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: CreditCard, label: 'Payments' },
  { icon: Bell, label: 'Notifications' },
  { icon: Settings, label: 'Settings' },
];

const stats = [
  { label: 'Occupancy', value: '87%', bg: 'bg-teal-50', border: 'border-teal-200/60', text: 'text-teal-600', dot: 'bg-teal-400' },
  { label: 'ADR', value: '$184', bg: 'bg-indigo-50', border: 'border-indigo-200/60', text: 'text-indigo-600', dot: 'bg-indigo-400' },
  { label: 'RevPAR', value: '$160', bg: 'bg-emerald-50', border: 'border-emerald-200/60', text: 'text-emerald-600', dot: 'bg-emerald-400' },
  { label: 'Guests', value: '312', bg: 'bg-amber-50', border: 'border-amber-200/60', text: 'text-amber-600', dot: 'bg-amber-400' },
];

const bars = [30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 100];

const roomTypes = [
  { label: 'Standard', pct: 45 },
  { label: 'Deluxe', pct: 30 },
  { label: 'Suite', pct: 25 },
];

export default function Preview() {
  return (
    <section
      id="preview"
      className="relative min-h-screen grid grid-cols-2 items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f5f3 50%, #f5f0ff 100%)',
      }}
    >
    <div></div>
    
    <div>
              {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full py-16">
        {/* 3D tilt wrapper */}
        <div
          className="transition-transform duration-700 ease-out hover:[transform:rotateX(8deg)_rotateY(-3deg)_rotateZ(1deg)]"
          style={{
            transform: 'rotateX(18deg) rotateY(-6deg) rotateZ(2deg)',
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            borderRadius: '20px',
            boxShadow: `
              0 60px 120px rgba(20,184,166,0.18),
              0 30px 60px rgba(99,102,241,0.12),
              0 10px 30px rgba(0,0,0,0.08),
              inset 0 1px 0 rgba(255,255,255,0.9)
            `,
          }}
        >
          {/* Dashboard card */}
          <div className="flex h-[26rem] md:h-[30rem] rounded-2xl border border-white/80 bg-white/90 backdrop-blur-xl overflow-hidden">

            {/* ── Sidebar ── */}
            <aside className="hidden md:flex flex-col w-52 flex-shrink-0 border-r border-teal-100/60 bg-gradient-to-b from-slate-50 to-teal-50/40 py-5 px-3 gap-0.5">
              {/* Logo */}
              <div className="flex items-center gap-2 px-3 mb-5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md shadow-teal-200">
                  <LayoutDashboard className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-800 font-bold text-sm tracking-tight">StaySync</span>
              </div>

              {sidebarItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    item.active
                      ? 'bg-gradient-to-r from-teal-500/10 to-teal-400/5 text-teal-700 shadow-sm shadow-teal-100'
                      : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100/60'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${item.active ? 'text-teal-500' : ''}`} />
                  {item.label}
                  {item.active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400" />
                  )}
                </div>
              ))}
            </aside>

            {/* ── Main ── */}
            <div className="flex-1 p-6 md:p-7 overflow-hidden bg-gradient-to-br from-white to-slate-50/80">

              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-slate-800 font-bold text-base tracking-tight">Dashboard</h3>
                  <p className="text-slate-400 text-xs mt-0.5">Welcome back, Manager</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-7 w-24 rounded-full bg-slate-100 border border-slate-200/80" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 border-2 border-white shadow-md shadow-teal-200/60" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border ${s.bg} ${s.border} p-3.5`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</span>
                    </div>
                    <div className={`text-xl font-bold tracking-tight ${s.text}`}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid md:grid-cols-3 gap-3">
                {/* Bar chart */}
                <div className="md:col-span-2 h-36 rounded-xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Revenue Trend</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i % 2 === 0
                            ? 'linear-gradient(180deg, #2dd4bf, #0d9488)'
                            : 'linear-gradient(180deg, #a5b4fc, #6366f1)',
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Room types */}
                <div className="h-36 rounded-xl border border-slate-200/70 bg-white shadow-sm shadow-slate-100 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Room Types</p>
                  <div className="space-y-2.5">
                    {roomTypes.map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 w-14 font-medium">{r.label}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${r.pct}%`,
                              background: 'linear-gradient(90deg, #14b8a6, #6366f1)',
                            }}
                          />
                        </div>
                        <span className="text-[9px] text-slate-400 w-6 text-right font-semibold">{r.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
}