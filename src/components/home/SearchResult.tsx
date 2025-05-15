"use client";
import { useIsMobile } from "@/hooks/use-mobile"

import VideoGridCard from "@/components/videos/video-grid-card"
import { VideoRowCard } from "@/components/videos/video-row-card"
import { VideoListResponse } from "@/data/types/videos-response-types"

interface SearchPageProps {
  videos: VideoListResponse
}

const SearchResult = ({ videos }: SearchPageProps) => {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {videos.items.map(video => (
            <VideoGridCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {videos.items.map(video => (
            <VideoRowCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </>
  )
}
export default SearchResult