"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { compactDate, compactNumber, expandedDate, expandedNumber } from "@/lib/formatData";


interface VideoDescriptionProps {
    video: {
        title: string;
        channelName: string;
        videoId: string;
        commentCount: number;
        viewCount: number;
        likeCount: number;
        publishedAt: string;
        description: string;
    };
}
const VideoDescription = ({ video }: VideoDescriptionProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            onClick={() => setIsExpanded((current) => !current)}
            className="bg-secondary/50 rounded-xl p-3 cursor-pointer hover:bg-secondary/70 transition"
        >
            <div className="flex gap-2 text-sm mb-2">
                <span className="font-medium ">
                    {isExpanded ? expandedNumber(video.viewCount) : compactNumber(video.viewCount)} views
                </span>
                <span className="font-medium ">
                    {isExpanded ? expandedDate(video.publishedAt) : compactDate(video.publishedAt)}
                </span>
            </div>

            <div className="relative w-full overflow-hidden">
                <p className={cn(
                    "text-sm whitespace-pre-wrap break-all hyphens-auto overflow-hidden max-w-full",
                    !isExpanded && "line-clamp-2"
                )}>
                    {video.description || "No Description"}
                </p>
            </div>

            <div className="flex items-center gap-1 mt-4 text-sm font-medium">
                {isExpanded ? (
                    <>
                        Show Less <ChevronUpIcon className="size-4" />
                    </>
                ) : (
                    <>
                        Show More <ChevronDownIcon className="size-4" />
                    </>
                )
                }
            </div>
        </div>
    )
}
export default VideoDescription