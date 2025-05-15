import { REGION_CODE, VIDEO_LIST_MAX_RESULTS } from "../constants";
import { fetchYouTubeAPI } from "./base-api";
import { getVideoDetails } from "./videos";


export const searchVideos = async (query: string) => {
    type VideoSearchParams = {
        q: string;
        part: string;
        regionCode: string;
        maxResults: string;
        fields?: string;
    };

    try {
        const videoSearchParams: VideoSearchParams = {
            q: query,
            part: 'snippet',
            regionCode: REGION_CODE,
            maxResults: VIDEO_LIST_MAX_RESULTS.toString(),
            fields: 'items(id(videoId))'
        };

        const response = await fetchYouTubeAPI("search", videoSearchParams);

        if (response.items.length === 0) {
            throw new Error("No videos found for the search query");
        }

        const videoIds = response.items.map((video) => video.id.videoId);
        const videoList = await getVideoDetails(videoIds);
        return videoList;

    } catch (error) {
        console.error("Error Fetching getMostPopularVideoListByCategory", error);
    }
}