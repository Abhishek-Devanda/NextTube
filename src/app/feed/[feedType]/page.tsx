import { Metadata } from "next";
import Image from "next/image";
import VideoGridCard from "@/components/videos/video-grid-card";
import { mostPopularVideoListByCategory } from "@/data/api/videos"
import { VideoListResponse } from "@/data/types/videos-response-types";

interface PageProps {
    params: Promise<{
        feedType: string
    }>
}

function getFeedId(feedType: string) {
    switch (feedType) {
        case 'trending':
            return { title: 'Trending', id: '0', url: "https://www.youtube.com/img/trending/avatar/trending_animated.webp" };
        case 'shopping':
            return { title: 'Shopping', id: 'NA', url: "https://yt3.googleusercontent.com/6AGZGQPeF8rIrCxRdNxlxSJIj1U3gelRokIjCt1esHFnWiuBlm9dwdz37tlF7Kv60IFA9bi3=s120-c-c0x00ffffff-no-rwa" };
        case 'music':
            return { title: 'Music', id: '10', url: "https://yt3.googleusercontent.com/ytc/AIdro_k0PVo4Ayjzf9FlRcdjZAQYBwK430_hLvWlP9jgikQjC65W-ONDWjkk4dykteuHJ96HgQ=s176-c-k-c0x00ffffff-no-rj-mo" };
        case 'films':
            return { title: 'Films', id: 'NA', url: "https://www.gstatic.com/youtube/img/tvfilm/animated_clapperboard_profile_v1.webp" };
        case 'live':
            return { title: 'Live', id: 'NA', url: "https://yt3.googleusercontent.com/JBRD2aGs76cb1XRqw9hmHcof1OqDHLCq4PAi4jPXb6Xli6Fgk71yAwptfAZuyksVXo822FRE=s120-c-c0x00ffffff-no-rwa" };
        case 'gaming':
            return { title: 'Gaming', id: '20', url: "https://yt3.googleusercontent.com/GFc_A-blEltrFJDdN_Hhq7wMxATv1u1LWHF87HZ7duVPBYWfwjeL-mZ8cV2_2hiQfFiHIdM-IXI=s120-c-c0x00ffffff-no-rwa" };
        case 'news':
            return { title: 'News', id: '25', url: "" };
        case 'sports':
            return { title: 'Sports', id: '17', url: "https://yt3.googleusercontent.com/RV7Xjtmnl7ld6OERcxfHRePw3dfRRAcD5_OyEZHiBIA6DBkQwiL0WjHV4nQDrVwOknlJTTbRfQ=s176-c-k-c0x00ffffff-no-rj-mo" };
        case 'courses':
            return { title: 'Courses', id: '27', url: "https://www.gstatic.com/youtube/img/courses/animated_courses_destination_v2.webp" };
        case 'fashion-and-beauty':
            return { title: 'Fashion and Beauty', id: 'NA', url: "https://yt3.googleusercontent.com/vgDRIrGv4eFbfcyTiubRSwkhzk8zCaHArieUu4H0DijHaWiNF0kr9dJygRu3X2TquIckGXrktg=s120-c-c0x00ffffff-no-rwa" };
        case 'podcasts':
            return { title: 'Podcasts', id: 'NA', url: "https://www.youtube.com/img/podcasts/avatar/animated_avatar_color_v1_circle_240x240.webp.webp" };
        default:
            return 'NA';
    }
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { feedType } = await params
    const feedId = getFeedId(feedType)
    if (feedId === 'NA') {
        return {
            title: 'This feed is not available',
            description: 'This feed is not available',
        }
    }
    return {
        title: `${feedId.title} - NextTube`,
        description: `Watch the latest ${feedId.title} videos on NextTube`,
    }
}

const page = async ({ params }: PageProps) => {
    const { feedType } = await params
    const feedId = getFeedId(feedType)

    if (feedId === 'NA') {
        return (
            <div className="bg-black min-h-screen text-white flex justify-center items-center">
                This feed is not available.
            </div>
        )
    }

    // Always show the top image and title
    let data: VideoListResponse | undefined = undefined;
    let error = null;
    if (feedId.id !== 'NA') {
        try {
            data = await mostPopularVideoListByCategory(feedId.id)
        } catch (e) {
            error = e
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-start gap-3 mb-6">
                {feedId.url && feedId.url.length > 0 && (
                    <Image
                        src={feedId.url}
                        alt={feedId.title}
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                )}
                <h1 className="text-4xl font-bold">{feedId.title}</h1>
            </div>
            {/* Show message if feedId.id is NA or no videos found or error */}
            {(feedId.id === 'NA' || error || !data || !data.items || data.items.length === 0) ? (
                <div className="min-h-[200px] flex justify-center items-center rounded-lg">
                    No videos found.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {data.items.map((video) => (
                        <VideoGridCard
                            key={video.id}
                            video={video}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default page