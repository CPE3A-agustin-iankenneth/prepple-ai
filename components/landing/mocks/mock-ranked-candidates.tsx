import { cn } from '@/lib/utils';

const candidates = [
  { name: 'Maya Chen', email: 'maya.chen@email.com', score: 91, status: 'accepted' as const },
  { name: 'Jordan Okonkwo', email: 'j.okonkwo@email.com', score: 84, status: 'pending' as const },
  { name: 'Sofia Alvarez', email: 's.alvarez@email.com', score: 78, status: 'pending' as const },
];

const statusColor = {
  accepted: 'text-emerald-400',
  pending: 'text-slate-400',
  rejected: 'text-red-400',
};

export function MockRankedCandidates({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-[#161922] p-4 text-left">
      <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <span className="text-sm font-medium text-white">Candidate rankings</span>
        <span className="text-xs text-slate-500">Frontend Hiring Sprint</span>
      </div>
      <div className={cn('space-y-2', compact && 'space-y-1.5')}>
        {candidates.map((c, i) => (
          <div
            key={c.email}
            className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold tabular-nums text-primary">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{c.name}</p>
              {!compact && (
                <p className="truncate text-xs text-slate-500">{c.email}</p>
              )}
            </div>
            <span className="text-lg font-bold tabular-nums text-primary">{c.score}</span>
            <span className={cn('text-xs font-medium capitalize', statusColor[c.status])}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
