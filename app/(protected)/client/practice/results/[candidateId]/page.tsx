import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProcessingState from "@/components/processing-state";
import PracticeResultView from "@/components/practice-result-view";

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
        .select("room_title, job_posting, ai_instruction, custom_parameters, created_at")
        .eq("id", candidate?.applied_room)
        .eq("is_practice", true)
        .single()

    if (!roomData) {
        console.error(roomDataError);
        return <div className="p-8 text-center">Practice room record not found.</div>
    }


    const report = Array.isArray(candidate.ai_reports) ? candidate.ai_reports[0] : candidate.ai_reports

    if (!report) {
        return <ProcessingState candidateId={candidateId} />
    }

    // Return resultview here
    return <PracticeResultView report={report} room={roomData} />


}