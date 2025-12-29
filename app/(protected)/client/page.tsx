import { createClient } from "@/lib/supabase/server"
import { JoinRoomCode } from "@/components/join-room-code";
import Link from "next/link";
import ClientNavbar from "@/components/client-navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
    const supabase = createClient();
    const { data: { user } } = await (await supabase).auth.getUser();

    // Fetch user profile
    const { data: userProfile, error: profileError } = await (await supabase)
        .from('users')
        .select('name, is_hr')
        .eq('id', user?.id)
        .single();
    if (profileError) {
        console.error('Error fetching user profile:', profileError);
    }

    // Check if user is HR and redirect if necessary
    if (userProfile?.is_hr) {
        return (
            <div>
                <h1>You are currently logged in as an Admin / HR</h1>
                <Link href="/admin">Go to HR Dashboard</Link>
            </div>
        );
    }


  return (
      <div className="w-full flex flex-col h-full items-center px-32 py-8">
        <ClientNavbar name={userProfile?.name || ''} />
        <div className="flex flex-col flex-1 gap-16 justify-center items-center">
          <div className="text-center">
            <h1 className="w-xl text-4xl/12">The AI Interview platform that strengthens the bridge between you and your future employers.</h1>
          </div>
          <div className="flex gap-12 items-center justify-center">
            <JoinRoomCode />
            <div className="border border-accent h-full"></div>
            <div className="max-w-sm flex flex-col gap-4">
              <Card>
                <CardHeader>
                <CardTitle>Create a Practice Session</CardTitle>
                <CardDescription>
                  Use PreppleAI to practice your interview skills with AI-powered mock interviews.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Button asChild className="w-full">
                  <Link href="/client/practice">Start Practicing</Link>
                </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  )
}