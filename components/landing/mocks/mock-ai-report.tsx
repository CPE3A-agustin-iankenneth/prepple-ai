import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const toneMetrics = [
  { label: 'Confidence', value: 88 },
  { label: 'Clarity', value: 82 },
  { label: 'Engagement', value: 79 },
  { label: 'Pace', value: 85 },
];

export function MockAiReport({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn('bg-[#161922] p-4 text-left', compact && 'p-3')}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Interview report</p>
          <p className="mt-1 text-sm font-medium text-white">Maya Chen</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-wide text-slate-500">Score</p>
          <p className="text-3xl font-bold tabular-nums text-primary">91</p>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs text-slate-500">Overall:</span>
        <Badge className="bg-primary/20 text-primary hover:bg-primary/20">Recommend</Badge>
      </div>

      <p className="mb-4 text-xs leading-relaxed text-slate-400">
        Strong technical depth with clear communication. Answered system design questions with structured trade-offs.
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {toneMetrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-2 text-center"
          >
            <p className="text-[10px] text-slate-500">{m.label}</p>
            <p className="text-sm font-semibold tabular-nums text-white">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
