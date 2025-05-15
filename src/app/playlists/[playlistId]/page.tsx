import VideoGridCard from "@/components/videos/video-grid-card"
import { getPlaylistItems } from "@/data/api/playlists"

interface PageProps {
    params: Promise<{ playlistId: string }>
}
const Page = async ({ params }: PageProps) => {
    const { playlistId } = await params
    if (playlistId == 'WL' || playlistId == 'WH' || playlistId == 'UP' ) {
        return <h1 className="text-4xl font-bold mb-6">Youtube API does&apos;t allow fetching this playlist</h1>
    }

    const playlistItems = await getPlaylistItems(playlistId)
    const playlistsName = playlistId === 'LL' ? "Liked Videos" : "Playlist"
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">{playlistsName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {playlistItems.items.map((video) => (
                    <VideoGridCard
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>
        </div>
    )
}
export default Page