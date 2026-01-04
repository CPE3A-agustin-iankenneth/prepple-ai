import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("name, email, is_hr")
      .eq("id", user?.id)
      .single();
    if (userError) {
      console.error("Error fetching user data:", userError.message);
    }

    if (!userData.is_hr) {
      redirect("/client");
    }

    return (
      <div>
        <SidebarProvider>
          <AppSidebar user={userData} />
          {children}
        </SidebarProvider>
      </div>

    )
}
