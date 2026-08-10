const rooms = [
  { title: 'Frontend Hiring Sprint', code: 'FE-2847', status: 'active' as const, candidates: 24 },
  { title: 'Customer Support Wave 2', code: 'CS-1093', status: 'paused' as const, candidates: 11 },
  { title: 'Campus Engineering 2026', code: 'CE-4401', status: 'active' as const, candidates: 38 },
];

const statusDot = {
  active: 'bg-emerald-500',
  paused: 'bg-amber-400',
  archived: 'bg-slate-500',
};

export function MockRoomsPipeline() {
  return (
    <div className="space-y-2 bg-[#161922] p-4 text-left">
      <p className="mb-3 text-sm font-medium text-white">Active rooms</p>
      {rooms.map((room) => (
        <div
          key={room.code}
          className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
        >
          <span className={`h-2 w-2 shrink-0 rounded-full ${statusDot[room.status]}`} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{room.title}</p>
            <p className="text-xs text-slate-500">{room.code}</p>
          </div>
          <span className="text-xs tabular-nums text-slate-400">{room.candidates} candidates</span>
        </div>
      ))}
    </div>
  );
}
