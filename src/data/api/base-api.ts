import { getOauthAccessToken } from "@/lib/oAuthAccessToken";

import { channelList } from "./channel-data";
import { ApiBaseURL } from "../constants";

import { VideoListResponse } from "../types/videos-response-types";
import { ChannelListResponse } from "../types/channel-response-types";
import { CommentThreadListResponse } from "../types/commments-response-types";
import { SearchVideoListResponse } from "../types/search-response-types";
import { PlaylistListResponse, PlaylistItemListResponse } from "../types/playlist-response-types"; 

type YouTubeEndpoint = 'videos' | 'channels' | 'search' | 'commentThreads' | 'playlists' | 'playlistItems';

type ResponseType<T extends YouTubeEndpoint> =
    T extends 'videos' ? VideoListResponse :
    T extends 'channels' ? ChannelListResponse :
    T extends 'commentThreads' ? CommentThreadListResponse :
    T extends 'search' ? SearchVideoListResponse :
    T extends 'playlists' ? PlaylistListResponse :
    T extends 'playlistItems' ? PlaylistItemListResponse : 
    unknown;

class YouTubeAPIError extends Error {
    statusCode: number;
    url: string;

    constructor(message: string, statusCode: number, url: string) {
        super(message);
        this.name = "YouTubeAPIError";
        this.statusCode = statusCode;
        this.url = url;
    }
}

export async function fetchYouTubeAPI<T extends YouTubeEndpoint>(
    endpoint: T,
    params: { [key: string]: string },
    options: RequestInit = {}
): Promise<ResponseType<T>> {
    try {
        const token = await getOauthAccessToken();
        if (token) {
            params['access_token'] = token;
        }else {
            params['key'] = process.env.YOUTUBE_API_KEY as string;
        }

        const paramsString = new URLSearchParams(params).toString();
        const url = `${ApiBaseURL}/${endpoint}?${paramsString}`;

        const headers: HeadersInit = {
            'Accept': 'application/json',
        };

        const response = await fetch(url, {
            headers: headers,
            // cache: 'force-cache',
            ...options
        });
        const data = await response.json();

        if (!response.ok) {
            throw new YouTubeAPIError(
                `YouTube API request failed for ${endpoint} at URL: ${url}. Status: ${response.status} ${response.statusText}`,
                response.status,
                url
            );
        }

        if ('items' in data && !Array.isArray(data.items)) {
            data.items = [];
        }

        return data
    } catch (error) {
        console.error(`Error fetching from YouTube API (${endpoint}):`, error);
        if (error instanceof YouTubeAPIError) {
            throw error;
        } else {
            // Wrap other errors in a generic API error
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new YouTubeAPIError(
                `Generic YouTube API fetch error for ${endpoint}: ${errorMessage}`,
                500,
                `${ApiBaseURL}/${endpoint}` 
            );
        }
    }
}

export async function enhanceVideosWithChannelData(fetchedVideosList: VideoListResponse) {
    // Get channel IDs
    const channelIds = fetchedVideosList.items.map((video) => video.snippet.channelId);

    // Fetch all channel data
    const channels = await channelList(channelIds);

    // Enhance each video with its channel data
    fetchedVideosList.items.forEach((video) => {
        const channel = channels?.items.find(channel => channel.id === video.snippet.channelId);
        if (channel) {
            video.snippet.channelThumbnail = channel.snippet.thumbnails;
            video.snippet.channelCustomUrl = channel.snippet.customUrl;
            video.statistics.subscriberCount = channel.statistics?.subscriberCount;
        }
    });
    return fetchedVideosList;
}