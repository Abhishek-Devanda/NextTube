import { VideoItem } from "@/data/types/videos-response-types";
import { compactDate, compactNumber, formatDuration } from "@/lib/formatData";
import Image from "next/image";
import Link from "next/link";
import { UserAvatar } from "../user-avatar";

interface VideoGridCardProps {
    video: VideoItem;
}

const VideoGridCard = ({ video }: VideoGridCardProps) => {
    return (
        <div className="flex flex-col gap-2 w-full group">
            {/* Thumbnail Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Link href={`/videos/${video.id}`} className="block w-full h-full relative">
                    <Image
                        src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high.url || video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        fill
                        priority
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Duration Badge */}
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                        {formatDuration(video.contentDetails?.duration || '')}
                    </div>
                </Link>
            </div>

            {/* Content Area */}
            <div className="flex gap-3 pt-1">
                {/* Channel Avatar */}
                <div className="flex-shrink-0 pt-1">
                    <Link href={`/channel/${video.snippet.channelCustomUrl}`}>
                        <UserAvatar
                            size="md"
                            imageUrl={video.snippet.channelThumbnail?.medium.url || "/user-placeholder.svg"}
                            name={video.snippet.channelTitle}
                        />
                    </Link>
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0">
                    <Link href={`/videos/${video.id}`} className="block">
                        <h3 className="font-medium line-clamp-2 text-sm mb-1 hover:text-blue-500">
                            {video.snippet.title}
                        </h3>
                    </Link>

                    <Link 
                        href={`/channel/${video.snippet.channelCustomUrl}`} 
                        className="block text-xs text-muted-foreground hover:text-blue-500"
                    >
                        {video.snippet.channelTitle}
                    </Link>

                    <div className="text-xs text-muted-foreground mt-1">
                        {compactNumber(Number(video.statistics.viewCount))} views • {compactDate(video.snippet.publishedAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridCard;