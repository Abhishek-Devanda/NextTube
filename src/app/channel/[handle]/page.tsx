import Image from "next/image"
import { channelData } from "@/data/api/channel-data"
import { compactNumber } from "@/lib/formatData"

interface PageProps {
    params: Promise<{
        handle: string
    }>
}

const Page = async ({ params }: PageProps) => {
    const { handle } = await params
    const newHandle = '@' + handle.substring(3)
    const data = await channelData(newHandle, handle === 'mine' ? true : false)
    if (!data || !data.items || data.items.length === 0) {
        return <div className="bg-black min-h-screen text-white flex justify-center items-center">Channel not found.</div>
    }
    const channel = data.items[0]
    const { snippet, statistics } = channel
    const thumbnailUrl = snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "";

    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 flex flex-row items-start gap-6">
                {thumbnailUrl && (
                    <Image
                        src={thumbnailUrl}
                        alt={snippet.title || "Channel Thumbnail"}
                        height={128}
                        width={128} 
                        className="w-32 h-32 rounded-full border-4 border-black shadow-lg bg-gray-700 flex-shrink-0" // Added flex-shrink-0
                    />
                )}
                <div className="flex-1 text-left">
                    <div className="flex flex-row items-center gap-2 justify-start">
                        <h1 className="text-3xl font-bold">{snippet.title}</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-3 mt-1 text-gray-400">
                        {snippet.customUrl && (
                            <span className="text-gray-400 text-lg">{snippet.customUrl}</span>
                        )}
                        {statistics?.subscriberCount && (
                            <>
                                <span>·</span>
                                <span>{compactNumber(Number(statistics.subscriberCount))} subscribers</span>
                                <span>·</span>
                            </>
                        )}
                        {statistics?.videoCount && (
                            <span>{compactNumber(Number(statistics.videoCount))} videos</span>
                        )}
                    </div>
                    {snippet.description && (
                        <div className="mt-2 text-gray-300 max-w-xl mx-0">
                            {snippet.description}
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Page