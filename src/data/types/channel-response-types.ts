import { YouTubeApiResponse } from "./base-types";
import { ThumbnailSet } from "./videos-response-types";

// Channel snippet information
export interface ChannelSnippet {
    title: string;
    description: string;
    customUrl?: string;
    publishedAt: string;
    thumbnails: ThumbnailSet;
    defaultLanguage?: string;
    country?: string;
}

// Channel statistics
export interface ChannelStatistics {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}

// Main channel item interface
export interface ChannelItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ChannelSnippet;
    statistics?: ChannelStatistics;
}

// Channel list response type
export type ChannelListResponse = YouTubeApiResponse<ChannelItem>;