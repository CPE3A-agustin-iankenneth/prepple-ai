import { ClientSidebar, JoinedRoom } from "@/components/client-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { History } from "lucide-react";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return <div>Please log in</div>;
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("name, email")
      .eq("id", user.id)
      .single();
    
    if (userError) {
      console.error("Error fetching user data:", userError.message);
    }

    // Fetch joined rooms
    const { data: joinedRooms, error: roomsError } = await supabase
        .from('candidates')
        .select(`
            id,
            created_at,
            room:rooms (
                id,
                room_title
                ,
                        creator: users (
                          name
                        )
            )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

    if (roomsError) {
        console.error("Error fetching joined rooms:", roomsError.message);
    }

    return (
      <SidebarProvider>
        <ClientSidebar user={userData} joinedRooms={joinedRooms as unknown as JoinedRoom[]} />
        <SidebarInset>
            <SidebarTrigger className="absolute bottom-4 right-4 lg:top-4 lg:left-4 p-4 bg-primary lg:bg-transparent" icon={<History />} />
            <div className="flex flex-1 flex-col gap-4 lg:p-4">
                {children}
            </div>
        </SidebarInset>
      </SidebarProvider>
    )
}
