import { mostPopularVideoListByCategory } from "@/data/api/videos"
import { CategoriesSection } from "@/components/home/CategoriesSection"
import VideoGridCard from "@/components/videos/video-grid-card"

export const dynamic = "force-dynamic"

const Page = async () => {
  const videos = await mostPopularVideoListByCategory()

  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <CategoriesSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {videos.items.map(video => (
            <VideoGridCard key={video.id} video={video} />
          ))}
        </div>
    </div>
  )
}
export default Page