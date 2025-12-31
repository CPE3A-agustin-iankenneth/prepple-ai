import { CreateRoomForm } from "@/components/create-room-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function CreatePracticeRoom() {

    return (
        <div className="w-full flex flex-col h-full items-center py-4 px-4 lg:px-32 lg:py-8">
            <div className="w-full">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/client">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>
            <CreateRoomForm className="flex justify-center" isPractice={true} />
        </div>
    )
}