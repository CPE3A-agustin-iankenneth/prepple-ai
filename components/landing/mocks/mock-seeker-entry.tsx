export function MockSeekerEntry() {
  return (
    <div className="grid gap-3 bg-[#161922] p-4 sm:grid-cols-2">
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
        <p className="mb-2 text-sm font-medium text-white">Join with room code</p>
        <div className="mb-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-500">
          Enter code...
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-xs font-medium text-slate-300">
          Join room
        </div>
      </div>
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
        <p className="mb-1 text-sm font-medium text-white">Create a practice session</p>
        <p className="mb-3 text-xs leading-relaxed text-slate-500">
          Practice interview skills with AI-powered mock interviews.
        </p>
        <div className="rounded-full bg-primary px-3 py-1.5 text-center text-xs font-medium text-primary-foreground">
          Start practicing
        </div>
      </div>
    </div>
  );
}
