import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Report {
    tone_analysis: Record<string, number> | string;
    performance_summary: string;
    recommendation: string;
    interview_score: number;
    key_highlights: string[];
    areas_for_improvement: string[];
    custom_parameters_result: Record<string, string | number | boolean>;
    created_at: string;
}

interface Room {
    room_title: string;
    job_posting: string;
    ai_instruction: string;
    custom_parameters: Record<string, string | number | boolean>;
    created_at: string;
}

export default function PracticeResultView({ report, room }: { report: Report, room: Room }) {
    const toneMetrics = report?.tone_analysis
        ? Object.entries(typeof report.tone_analysis === 'string' ? JSON.parse(report.tone_analysis) : report.tone_analysis)
        : [];
    
    const customParameters = report?.custom_parameters_result
        ? Object.entries(report.custom_parameters_result)
        : [];
        
    const keyHighlights = report?.key_highlights ?? [];
    const areasForImprovement = report?.areas_for_improvement ?? [];
    
    const reportGeneratedAt = report?.created_at
        ? new Date(report.created_at).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
          })
        : null;

    const formatLabel = (value: string) =>
        value
            .split("_")
            .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
            .join(" ");

    const recommendationVariant: "default" | "secondary" | "destructive" | "outline" =
        report?.recommendation === "recommend"
            ? "default"
            : report?.recommendation === "reject"
                ? "destructive"
                : "secondary";

    return (
        <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
             <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center mb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">{room.room_title}</h1>
                    <p className="text-muted-foreground">Practice Session Result</p>
                </div>
                
                <Card className="w-full sm:w-auto">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                        <h2 className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Score</h2>
                        <p className="text-4xl font-bold text-primary">{report.interview_score ?? "N/A"}</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Performance Summary</CardTitle>
                        {reportGeneratedAt && (
                            <CardDescription>Generated on {reportGeneratedAt}</CardDescription>
                        )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {report.recommendation && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Overall Feedback:</span>
                                <Badge variant={recommendationVariant}>
                                    {formatLabel(report.recommendation)}
                                </Badge>
                            </div>
                        )}
                        <p className="leading-relaxed text-sm sm:text-base">
                            {report.performance_summary}
                        </p>
                    </CardContent>
                </Card>

                {toneMetrics.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Tone Analysis</CardTitle>
                            <CardDescription>AI analysis of your speech tone and delivery.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {toneMetrics.map(([metric, value]) => (
                                    <div key={metric} className="rounded-lg border p-4 bg-muted/50">
                                        <p className="text-sm text-muted-foreground mb-1">
                                            {formatLabel(metric)}
                                        </p>
                                        <p className="text-2xl font-semibold">{String(value)}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {(keyHighlights.length > 0 || areasForImprovement.length > 0) && (
                    <div className="grid gap-6 md:grid-cols-2">
                        {keyHighlights.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-green-600 dark:text-green-400">Key Highlights</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc space-y-2 pl-4 text-sm sm:text-base">
                                        {keyHighlights.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}
                        
                        {areasForImprovement.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-amber-600 dark:text-amber-400">Areas for Improvement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc space-y-2 pl-4 text-sm sm:text-base">
                                        {areasForImprovement.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}
                
                {customParameters.length > 0 && (
                     <Card>
                        <CardHeader>
                            <CardTitle>Additional Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {customParameters.map(([key, value]) => (
                                    <div key={key} className="rounded-lg border p-4">
                                        <p className="text-sm text-muted-foreground mb-1">
                                            {formatLabel(key)}
                                        </p>
                                        <p className="text-lg font-medium">{String(value)}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
            
            <div className="flex justify-center mt-8">
                <Button asChild variant="outline">
                    <Link href="/client/practice">Back to Practice Rooms</Link>
                </Button>
            </div>
        </div>
    );
}