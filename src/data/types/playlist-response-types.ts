import { YouTubeApiResponse } from "./base-types";
import { ThumbnailSet } from "./videos-response-types";

export interface LocalizedText {
    title: string;
    description: string;
}
export interface PlaylistSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailSet;
    channelTitle: string;
    localized: LocalizedText;
}
export interface PlaylistStatus {
    privacyStatus: "public" | "private" | "unlisted";
}
export interface PlaylistContentDetails {
    itemCount: number;
}
export interface PlaylistItem {
    kind: "youtube#playlist";
    etag: string;
    id: string;
    snippet: PlaylistSnippet;
    status: PlaylistStatus;
    contentDetails: PlaylistContentDetails;
}
export type PlaylistListResponse = YouTubeApiResponse<PlaylistItem>;



export interface PlaylistItemResourceId {
    kind: "youtube#video";
    videoId: string;
}

export interface PlaylistItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailSet;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: PlaylistItemResourceId;
    videoOwnerChannelTitle?: string;
    videoOwnerChannelId?: string;
}

export interface PlaylistItemContentDetails {
    videoId: string;
    videoPublishedAt?: string;
}

export interface PlaylistItemStatus {
    privacyStatus: "public" | "private" | "unlisted";
}

export interface PlaylistItemDetail {
    kind: "youtube#playlistItem";
    etag: string;
    id: string;
    snippet: PlaylistItemSnippet;
    contentDetails: PlaylistItemContentDetails;
    status: PlaylistItemStatus;
}

export type PlaylistItemListResponse = YouTubeApiResponse<PlaylistItemDetail>;
