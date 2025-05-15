import Link from "next/link";

import { compactNumber } from "@/lib/formatData";
import { VideoItem } from "@/data/types/videos-response-types";

import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";

import VideoMenu from "./VideoMenu";
import VideoReaction from "./VideoReaction";
import VideoDescription from "./VideoDescription";

interface VideoTopRowProps {
    VideoItem: VideoItem;
}

const VideoTopRow = ({ VideoItem }: VideoTopRowProps) => {
    const video = {
        title: VideoItem.snippet.title,
        channelCustomUrl: VideoItem.snippet.channelCustomUrl,
        channelThumbnail: VideoItem.snippet.channelThumbnail?.default.url,
        subscriberCount: Number(VideoItem.statistics.subscriberCount),
        channelName: VideoItem.snippet.channelTitle,
        videoId: VideoItem.id,
        commentCount: Number(VideoItem.statistics.commentCount),
        viewCount: Number(VideoItem.statistics.viewCount),
        likeCount: Number(VideoItem.statistics.likeCount),
        publishedAt: VideoItem.snippet.publishedAt,
        description: VideoItem.snippet.description,
    }
    return (
        <div className="flex flex-col gap-4 mt-3">
            <h1 className="text-xl font-semibold">{video.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* video channel */}
                <div className="flex items-center sm:items-center justify-between sm:justify-start gap-3 min-w-0">
                    <Link href={`/channel/${video.channelCustomUrl}`}>
                        <div className="flex items-center gap-3 min-w-0">
                            <UserAvatar
                                size={'lg'}
                                imageUrl={video.channelThumbnail || "/user-placeholder.svg"}
                                name={video.channelName}
                            />
                            <div className="flex flex-col gap-1 min-w-0">
                                <span>{video.channelName}</span>
                                <span className="text-sm text-muted-foreground line-clamp-1">{compactNumber(video.subscriberCount)} subscribers</span>
                            </div>
                        </div>
                    </Link>
                    {/* subscriber button */}
                    <Button className="cursor-pointer rounded-2xl">
                        Subscribe
                    </Button>
                </div>

                <div className="flex overflow-x-auto sm:min-w-[calc(50%)-6px] sm:justify-end sm:overflow-visible pb-2 -mb-2 sm:pb-0 sm:mb-0 gap-2">
                    <VideoReaction video={video} />
                    <VideoMenu videoId={video.videoId} variant="secondary" />
                </div>

            </div>
            <VideoDescription video={video} />
        </div>
    )
}
export default VideoTopRow
