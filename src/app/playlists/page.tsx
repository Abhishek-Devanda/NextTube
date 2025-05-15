import PlaylistGridCard from "@/components/playlists/playlist-grid-card";
import { getMyPlaylists } from "@/data/api/playlists";

export const dynamic = "force-dynamic"

const Page = async () => {
    const playlists = await getMyPlaylists();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Playlists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {playlists.items.map(playlist => (
                    <PlaylistGridCard key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    );
}
export default Page;