import { headers } from 'next/headers';
import { App } from '@/components/app';
import { getAppConfig } from '@/lib/livekit/utils';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Page({
  params,
  searchParams,
}: {
  params: { roomId: string };
  searchParams: { candidateId?: string };
}) {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);
  const supabase = await createClient();

  const { roomId } = params;
  const { candidateId } = searchParams;

  const { data: { user } } = await (await supabase).auth.getUser();

  const { data: isPracticeModeData, error: practiceModeError } = await supabase
    .from('rooms')
    .select('is_practice')
    .eq('id', roomId)
    .single();
  if (practiceModeError) {
    console.error('Error fetching room practice mode:', practiceModeError);
  }

  let hasCompletedInterview = false;
  if (user) {
    const { data: existingCompletion, error: completionError } = await supabase
      .from('candidates')
      .select('id')
      .eq('user_id', user.id)
      .eq('applied_room', roomId)
      .not('report_url', 'is', null) // Only check for completed interviews (having a report)
      .limit(1)

    if (completionError) {
      console.error('Error checking existing completion:', completionError)
    }

    if (existingCompletion && existingCompletion.length > 0) {
      hasCompletedInterview = true;
    }
  }

  const isPracticeMode = isPracticeModeData?.is_practice || false;

  if (hasCompletedInterview && !isPracticeMode) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-semibold mb-4">Interview Completed</h2>
        <p className="text-center max-w-md">
          You have already completed this interview assessment. Please wait for further instructions from the recruitment team.
        </p>
        <Link href="/client" className='mt-6 text-accent-foreground underline' >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return <App appConfig={appConfig} roomId={roomId} candidateId={candidateId} isPracticeMode={isPracticeMode} />;
}
