import SearchResult from "@/components/home/SearchResult"
import { searchVideos } from "@/data/api/search"

interface SearchPageProps {
    searchParams: Promise<{ query: string }>
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
    const { query } = await searchParams
    return {
        title: `${query} -NextTube`,
        description: `Search results for ${query} on NextTube`
    }
}

const Page = async ({ searchParams }: SearchPageProps) => {
    const { query } = await searchParams
    const videos = await searchVideos(query)
    if (!videos || videos.items.length === 0) {
        return <div className="text-center text-muted-foreground">No videos found for &quot;{query}&quot;.</div>;
      }
    return (
        <div className="max-w-[1300px] mx-auto mb-10 flex flex-col gap-y-6 px-4 pt-2.5">
            <SearchResult videos={videos} />
        </div>
    )
}
export default Page