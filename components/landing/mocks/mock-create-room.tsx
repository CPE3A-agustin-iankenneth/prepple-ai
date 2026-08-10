export function MockCreateRoom() {
  return (
    <div className="space-y-3 bg-[#161922] p-4 text-left">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-400">Room title</label>
        <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white">
          Frontend Engineer - Q1 Pipeline
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-400">Job posting</label>
        <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-slate-400">
          We are looking for a frontend engineer with React experience, strong communication skills, and attention to detail...
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-400">Interview type</label>
          <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white">
            Technical
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-400">Length</label>
          <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="mb-1 flex justify-between text-xs text-slate-400">
              <span>5 min</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[55%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
        Create room
      </div>
    </div>
  );
}
