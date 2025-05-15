import { fetchYouTubeAPI } from "./base-api";
import { PlaylistListResponse } from "../types/playlist-response-types"; // Import PlaylistItemListResponse
import { PLAYLIST_MAX_RESULTS, PLAYLIST_ITEMS_MAX_RESULTS } from "../constants"; // Import PLAYLIST_ITEMS_MAX_RESULTS
import { getVideoDetails } from "./videos";
import { VideoListResponse } from "../types/videos-response-types";

type PlaylistParams = {
    part: string;
    mine?: string;
    channelId?: string;
    maxResults?: string;
    fields?: string;
};

export const getMyPlaylists = async (): Promise<PlaylistListResponse> => {
    const params: PlaylistParams = {
        part: 'snippet,contentDetails,status',
        mine: 'true',
        maxResults: PLAYLIST_MAX_RESULTS.toString(),
    };

    try {
        const response = await fetchYouTubeAPI('playlists', params);
        return response as PlaylistListResponse;
    } catch (error) {
        console.error("Error fetching user's playlists:", error);
        throw error;
    }
};

export const getPlaylistItems = async (playlistId: string, pageToken?: string): Promise<VideoListResponse> => {
    type PlaylistItemParams = {
        part: string;
        playlistId: string;
        maxResults?: string;
        fields?: string;
        pageToken?: string;
    };

    const params: PlaylistItemParams = {
        part: 'contentDetails',
        playlistId: playlistId,
        maxResults: PLAYLIST_ITEMS_MAX_RESULTS.toString(),
    };

    if (pageToken) {
        params.pageToken = pageToken;
    }

    try {
        const playlistItemsList = await fetchYouTubeAPI('playlistItems', params);

        const videoIds = playlistItemsList.items.map((item) => item.contentDetails.videoId);
        const playlistItems = await getVideoDetails(videoIds);

        return playlistItems

    } catch (error) {
        console.error(`Error fetching items for playlist ${playlistId}:`, error);
        throw error;
    }
};

export const getChannelPlaylists = async (channelId: string): Promise<PlaylistListResponse> => {
    const params: PlaylistParams = {
        part: 'snippet,contentDetails,status',
        channelId: channelId,
        maxResults: PLAYLIST_MAX_RESULTS.toString(),
    };

    try {
        const response = await fetchYouTubeAPI('playlists', params);
        return response as PlaylistListResponse;
    } catch (error) {
        console.error(`Error fetching playlists for channel ${channelId}:`, error);
        throw error;
    }
};
