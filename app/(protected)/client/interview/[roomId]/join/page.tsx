import { createClient } from "@/lib/supabase/server";
import { JoinRoomForm } from "@/components/join-room-form";
import ClientNavbar from "@/components/client-navbar";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({ params }: { params: Promise<{ roomId: string }> }) {
  const supabase = createClient()
  const { roomId } = await params
  const { data: room, error: roomError } = await (await supabase)
    .from("rooms")
    .select("id, room_title")
    .eq("id", roomId)
    .single();

  const { data: { user } } = await (await supabase).auth.getUser();

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const { count } = await (await supabase)
    .from('candidates')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user?.id)
    .gte('created_at', today.toISOString())

  const DAILY_LIMIT = 3
  const usageCount = count || 0
  const hasReachedLimit = usageCount >= DAILY_LIMIT

  const { data: userProfile, error: profileError } = await (await supabase)
    .from('users')
    .select('name')
    .eq('id', user?.id)
    .single();
  if (profileError) {
    console.error('Error fetching user profile:', profileError);
  }

  if (roomError || !room) {
    console.error("Error fetching room:", roomError);
    return <div>Error fetching room</div>;
  }

  return (
    <div className="w-full flex flex-col h-screen items-center lg:py-8">
      <ClientNavbar name={userProfile?.name || ''} />
      <div className="flex flex-col flex-1 gap-8 justify-center items-center lg:px-32 lg:py-8 px-8">
        <div className="text-center">
            <h1 className="lg:text-4xl text-2xl font-semibold mb-4">Interview Room: {room.room_title}</h1>
            <p className="text-center">Ensure good microphone quality for best results. Good luck!</p>
        </div>

        {hasReachedLimit ? (
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-col items-center gap-2 pb-2">
              <AlertCircle className="h-10 w-10" />
              <CardTitle className="text-red-400">Daily Limit Reached</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              You have used {usageCount}/{DAILY_LIMIT} free interviews for today. 
              Please come back tomorrow to practice more.
            </CardContent>
          </Card>
        ) : (
          <JoinRoomForm className="lg:w-md w-full" roomId={room.id} />
        )}
      </div>
    </div>
  );
}