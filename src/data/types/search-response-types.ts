import { YouTubeApiResponse } from "./base-types";
import { Thumbnail } from "./videos-response-types";

export interface SearchThumbnailSet {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
}

export interface SearchSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: SearchThumbnailSet;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

// Resource IDs - can be different types
export interface videoId {
    kind: "youtube#video";
    videoId: string;
}

export interface channelId {
    kind: "youtube#channel";
    channelId: string;
}

export interface playlistId {
    kind: "youtube#playlist";
    playlistId: string;
}

// Union type for all possible resource IDs
export type ResourceId = videoId // | channelId | playlistId;

// Search result item
export interface SearchResultItem {
    kind: string;
    etag: string;
    id: ResourceId;
    snippet: SearchSnippet;
}

// Search list response - extends base API response with region code
export type SearchVideoListResponse = YouTubeApiResponse<SearchResultItem> & {
    regionCode: string;
}