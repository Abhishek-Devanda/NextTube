import { Metadata } from "next";

import { getVideoDetails } from "@/data/api/videos";

import CommentSection from "@/components/videos/comment-section/comment-section";
import SuggestionsSection from "@/components/videos/suggestions-section";
import VideoPlayer from "@/components/videos/video-section/VideoPlayer";
import VideoTopRow from "@/components/videos/video-section/VideoTopRow";

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { videoId } = await params;
    const videos = await getVideoDetails([videoId]);
    const video = videos.items[0];
    if (!video) {
        return {
            title: "Video Not Found",
            description: "Video Not Found",
        }
    }
    return {
        title: video.snippet.title,
        description: video.snippet.description,
    }
}

type PageProps = {
    params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
    const { videoId } = await params;
    const videos = await getVideoDetails([videoId]);
    const video = videos.items[0];
    if (!video) {
        return "Video Not Found";
    }
    return (
            <div className="flex flex-row flex-wrap max-w-[1700px] mx-auto pt-2.5 px-4 mb-10">
                <div className="flex flex-col gap-6 lg:w-[69%]">

                    <div className="flex-1 min-w-full ">
                        <VideoPlayer playbackId={videoId} />
                        <VideoTopRow VideoItem={video} />
                        <CommentSection
                            liveContent={video.snippet.liveBroadcastContent}
                            videoId={videoId}
                            commentCount={Number(video.statistics?.commentCount)}
                        />
                    </div>

                    <div className="sm:hidden block mt-2">
                        <SuggestionsSection categoryId={video.snippet.categoryId} />
                    </div>

                </div>
                <div className="hidden sm:block lg:w-[29%] shrink-1 ml-3">
                    <SuggestionsSection categoryId={video.snippet.categoryId} />
                </div>
            </div>
    );
};
export default Page;
