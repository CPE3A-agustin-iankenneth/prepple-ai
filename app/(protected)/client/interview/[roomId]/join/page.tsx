import { createClient } from "@/lib/supabase/server";
import { JoinRoomForm } from "@/components/join-room-form";
import ClientNavbar from "@/components/client-navbar";

export default async function Page({ params }: { params: Promise<{ roomId: string }> }) {
  const supabase = createClient()
  const { roomId } = await params
  const { data: room, error: roomError } = await (await supabase)
    .from("rooms")
    .select("id, room_title")
    .eq("id", roomId)
    .single();

  const { data: { user } } = await (await supabase).auth.getUser();
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
            <p className="text-center">Prepare yourself and give your best performance!</p>
        </div>
        <JoinRoomForm className="lg:w-md w-full" roomId={room.id} />
      </div>
    </div>
  );
}