import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LandingPage from "@/components/landing-page";

export default async function Home() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    // Fetch user profile to check role
    const { data: profile } = await supabase
      .from("users")
      .select("is_hr")
      .eq("id", user.id)
      .single();

    if (profile) {
      // Redirect based on is_hr column
      if (profile.is_hr) {
        redirect("/admin");
      } else {
        redirect("/client");
      }
    }
  }

  // If no user or no profile, show landing page
  return <LandingPage />;
}
