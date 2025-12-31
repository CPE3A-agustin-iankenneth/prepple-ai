"use client"

import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

export default function ProcessingState({ candidateId }: { candidateId: string }) {
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        const channel = supabase
            .channel("ai-report-channel")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "ai_reports", filter: `candidate_id=eq.${candidateId}` },
                (payload) => {
                    router.refresh()
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [candidateId, router, supabase])

    return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <div className="relative">
        <Spinner />
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Analyzing Interview
        </h2>
        <p className="text-muted-foreground max-w-md">
          Our AI is currently processing your responses, analyzing tone, and generating feedback. This usually takes about 30 seconds.
        </p>
      </div>
    </div>
  );
}

