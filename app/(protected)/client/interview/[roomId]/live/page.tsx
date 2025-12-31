import { headers } from 'next/headers';
import { App } from '@/components/app';
import { getAppConfig } from '@/lib/livekit/utils';
import { createClient } from '@/lib/supabase/server';

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
  const { data: isPracticeModeData, error: practiceModeError } = await supabase
    .from('rooms')
    .select('is_practice')
    .eq('id', roomId)
    .single();
  if (practiceModeError) {
    console.error('Error fetching room practice mode:', practiceModeError);
  }


  return <App appConfig={appConfig} roomId={roomId} candidateId={candidateId} isPracticeMode={isPracticeModeData?.is_practice} />;
}
