import { mostPopularVideoListByCategory } from "@/data/api/videos";
import { VideoRowCard } from "./video-row-card";
import VideoGridCard from "./video-grid-card";

interface SuggestionsSectionProps {
  categoryId: string | undefined;
}

const SuggestionsSection = async ({ categoryId }: SuggestionsSectionProps) => {
  try {
    const videos = await mostPopularVideoListByCategory(categoryId);
    if (!videos || videos.items.length === 0) {
      return (
        <h2 className="flex items-center justify-center text-muted-foreground">No videos Found</h2>
      )
    }

    return (
      <>
        <div className="hidden sm:block flex-col space-y-3">
          {videos.items.map((video) => (
            <VideoRowCard
              key={video.id}
              video={video}
              size={"compact"}
            />
          ))}
        </div>
        <div className="block sm:hidden flex-col space-y-3">
          {videos.items.map((video) => (
            <VideoGridCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return (
      <h2 className="flex items-center justify-center">No videos Found</h2>
    );
  }
}
export default SuggestionsSection;