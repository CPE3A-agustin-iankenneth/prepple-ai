import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProcessingState from "@/components/processing-state";
import PracticeResultView from "@/components/practice-result-view";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldQuestion } from "lucide-react";

export default async function ResultsPage({ params }: { params: { candidateId: string }}) {
    const { candidateId } = await params;
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/sign-in')
    }

    const { data: candidate, error: candidateError } = await supabase
        .from("candidates")
        .select(`
          id,
          applied_room,
          ai_reports (
            id,
            tone_analysis,
            performance_summary,
            recommendation,
            interview_score,
            key_highlights,
            areas_for_improvement,
            custom_parameters_result,
            created_at
          )
        `)
        .eq("id", candidateId) 
        .single()

    if (!candidate) {
        console.error(candidateError);
        return <div className="p-8 text-center">Candidate record not found.</div>
    }

    const { data: roomData, error: roomDataError } = await supabase
        .from("rooms")
        .select("room_title, job_posting, ai_instruction, custom_parameters, created_at, is_practice")
        .eq("id", candidate?.applied_room)
        .single()

    if (!roomData) {
        console.error(roomDataError);
        return <div className="p-8 text-center">Practice room record not found.</div>
    }


    const report = Array.isArray(candidate.ai_reports) ? candidate.ai_reports[0] : candidate.ai_reports

    if (!report) {
        return <ProcessingState candidateId={candidateId} />
    }

    if (!roomData.is_practice) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center p-8">
                <Card className="max-w-lg text-center">
                    <CardHeader>
                        <ShieldQuestion className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
                        <CardTitle className="text-lg">Interview results unavailable</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            Candidates cannot view interview results from rooms distributed by HR teams inside Prepple yet.
                        </p>
                        <p>
                            Please check your email for updates about your interview while we finish rolling out in-app status tracking for candidates in a future update.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button asChild>
                            <Link href="/client">Back to home</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    // Return resultview here
    return <PracticeResultView report={report} room={roomData} />


}