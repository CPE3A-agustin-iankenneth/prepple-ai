import type { Mode } from '@/app/constants';
import type { MockKey } from '@/components/landing/types';
import { MockAiReport } from './mock-ai-report';
import { MockCreateRoom } from './mock-create-room';
import { MockLiveInterview } from './mock-live-interview';
import { MockPracticeResult } from './mock-practice-result';
import { MockRankedCandidates } from './mock-ranked-candidates';
import { MockRoomsPipeline } from './mock-rooms-pipeline';
import { MockSeekerEntry } from './mock-seeker-entry';

export type { MockKey };

export function LandingMock({
  mock,
  compact,
}: {
  mock: MockKey;
  compact?: boolean;
}) {
  switch (mock) {
    case 'ranked-candidates':
      return <MockRankedCandidates compact={compact} />;
    case 'ai-report':
      return <MockAiReport compact={compact} />;
    case 'live-interview':
      return <MockLiveInterview />;
    case 'create-room':
      return <MockCreateRoom />;
    case 'rooms-pipeline':
      return <MockRoomsPipeline />;
    case 'seeker-entry':
      return <MockSeekerEntry />;
    case 'practice-result':
      return <MockPracticeResult />;
    default:
      return null;
  }
}

export function HeroMock({ mode }: { mode: Mode }) {
  return (
    <LandingMock
      mock={mode === 'recruiter' ? 'ranked-candidates' : 'live-interview'}
      compact={mode === 'recruiter'}
    />
  );
}
