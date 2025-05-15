"use client";
import { Skeleton } from '@/components/ui/skeleton';
import ReactPlayer from 'react-player/youtube'

interface VideoPlayerProps {
  playbackId: string;
}

const VideoPlayer = ({ playbackId }: VideoPlayerProps) => {
  if (!playbackId) return null;
  return (
    <div className='aspect-video overflow-hidden relative rounded-xl'>
        <ReactPlayer
          fallback={<VideoPlayerSkeleton />}
          playing={true}
          width={'100%'}
          height={'100%'}
          volume={0.1}
          controls
          url={`https://www.youtube.com/watch?v=${playbackId}`}
        />
    </div>
  )
}
export default VideoPlayer


export const VideoPlayerSkeleton = () => {
  return (
    <div className='aspect-video overflow-hidden relative rounded-xl'>
      <Skeleton className='w-full h-full' />
    </div>
  )
}