import { enhanceVideosWithChannelData, fetchYouTubeAPI } from "./base-api";
import { REGION_CODE, VIDEO_LIST_MAX_RESULTS } from "../constants";
import { VideoListResponse } from "../types/videos-response-types";


export const getVideoDetails = async (videoIds: string[]) => {
    type Params = {
        id: string;
        part: string;
        fields?: string;
    };

    const videosParams: Params = {
        part: 'snippet,contentDetails,statistics',
        id: videoIds.join(','),
    };
    const response = await fetchYouTubeAPI('videos', videosParams);
    if (!response.items || response.items.length === 0) {
        throw new Error("No video data found");
    }

    //add channel data to video
    const videos = await enhanceVideosWithChannelData(response);
    return videos;

}

export const mostPopularVideoListByCategory = async (videoCategoryId: string = '0') => {
    type VideoSearchParams = {
        videoCategoryId: string;
        chart: string;
        part: string;
        regionCode: string;
        maxResults: string;
        fields?: string;
    };

    const videoSearchParams: VideoSearchParams = {
        videoCategoryId,
        chart: 'mostPopular',
        part: 'snippet,contentDetails,statistics',
        regionCode: REGION_CODE,
        maxResults: VIDEO_LIST_MAX_RESULTS.toString(),
        // fields: 'items(id,snippet(channelId,channelTitle,publishedAt,title,description,categoryId,thumbnails(high(url))),contentDetails(duration),statistics(viewCount))',
    };

    const response: VideoListResponse = await fetchYouTubeAPI('videos', videoSearchParams);
    if (!response.items) {
        throw new Error("No video data found");
    }

    // Add channel data to videos
    const enrichedVideosList = await enhanceVideosWithChannelData(response);

    return enrichedVideosList;


}
