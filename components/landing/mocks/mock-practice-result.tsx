import { MockAiReport } from './mock-ai-report';

export function MockPracticeResult() {
  return (
    <div className="bg-[#161922]">
      <div className="border-b border-white/[0.06] px-4 py-3">
        <p className="text-sm font-medium text-white">Senior PM Practice</p>
        <p className="text-xs text-slate-500">Practice session result</p>
      </div>
      <MockAiReport compact />
    </div>
  );
}
