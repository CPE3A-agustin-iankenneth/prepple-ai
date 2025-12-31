import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProcessingState from "@/components/processing-state";
import PracticeResultView from "@/components/practice-result-view";
import PracticeResultLockedCard from "@/components/practice-result-locked-card";

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
        .select("room_title, job_posting, ai_instruction, custom_parameters, created_at, is_practice, hr_id")
        .eq("id", candidate?.applied_room)
        .single()

    if (!roomData) {
        console.error(roomDataError);
        return <div className="p-8 text-center">Practice room record not found.</div>
    }

    const report = Array.isArray(candidate.ai_reports) ? candidate.ai_reports[0] : candidate.ai_reports

    let roomOwnerName: string | null = null

    if (!roomData.is_practice && roomData.hr_id) {
        const { data: roomOwner, error: roomOwnerError } = await supabase
            .from("users")
            .select("name")
            .eq("id", roomData.hr_id)
            .single()

        if (roomOwnerError) {
            console.error(roomOwnerError)
        }

        roomOwnerName = roomOwner?.name ?? null
    }

    const interviewDate = roomData.created_at
        ? new Date(roomData.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        : null

    if (!report) {
        return <ProcessingState candidateId={candidateId} />
    }

    if (!roomData.is_practice) {
        return (
            <PracticeResultLockedCard
                roomTitle={roomData.room_title}
                roomOwnerName={roomOwnerName}
                interviewDate={interviewDate}
            />
        );
    }

    // Return resultview here
    return <PracticeResultView report={report} room={roomData} />


}