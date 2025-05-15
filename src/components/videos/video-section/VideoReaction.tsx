import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import { Button } from "../../ui/button"
import { Separator } from "../../ui/separator"
import { compactNumber } from "@/lib/formatData";

interface VideoReactionProps {
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
const VideoReaction = ({video}:VideoReactionProps) => {
    return (
        <div className="flex items-center flex-none">
            <Button
                variant={'secondary'}
                className="rounded-l-full rounded-r-none gap-2 pr-4 cursor-pointer"
            >
                <ThumbsUpIcon className="size-5" />
                {compactNumber(video.likeCount)}
            </Button>
            <Separator orientation="vertical" className="h-7" />
            <Button
                variant={'secondary'}
                className="rounded-r-full rounded-l-none pr-3 cursor-pointer"
            >
                <ThumbsDownIcon className="size-5" />
            </Button>

        </div>
    )
}
export default VideoReaction