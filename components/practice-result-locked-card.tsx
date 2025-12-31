"use client";

import Link from "next/link";
import { ShieldQuestion } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PracticeResultLockedCardProps {
    roomTitle?: string | null;
    roomOwnerName?: string | null;
    interviewDate?: string | null;
    backHref?: string;
}

export default function PracticeResultLockedCard({
    roomTitle,
    roomOwnerName,
    interviewDate,
    backHref = "/client"
}: PracticeResultLockedCardProps) {
    const details = [
        { label: "Room title", value: roomTitle ?? "Not available" },
        { label: "Room owner", value: roomOwnerName ?? "Not yet shared" },
        { label: "Interview date", value: interviewDate ?? "Unscheduled" }
    ];

    return (
        <div className="flex min-h-[60vh] items-center justify-center p-8">
            <Card className="w-full max-w-lg text-center p-4">
                <CardHeader>
                    <ShieldQuestion className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                    <CardTitle className="text-xl">Interview results unavailable</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                    <p>
                        Candidates cannot view interview results from rooms distributed by HR teams inside Prepple. Please
                        check your email for updates about your interview.
                    </p>
                    <p>
                        In an upcoming update, we plan to support in-app tracking of interview progress
                        assigned by HR teams.
                    </p>
                    <Separator />
                    <div className="space-y-2 text-left text-sm">
                        {details.map(({ label, value }) => (
                            <div key={label} className="flex items-center justify-between gap-4 rounded-md bg-muted/20 px-3 py-2">
                                <span className="font-medium text-foreground/80">{label}</span>
                                <span className="text-right text-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button asChild>
                        <Link href={backHref}>Back to home</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
