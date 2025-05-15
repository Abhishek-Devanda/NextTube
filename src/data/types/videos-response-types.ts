import { YouTubeApiResponse } from "./base-types";

// Base interfaces for reusable components
export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ThumbnailSet {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}


export interface VideoSnippet {
  title: string;
  description: string;
  categoryId: string;
  publishedAt: string;
  thumbnails: ThumbnailSet;
  channelId: string;
  channelTitle: string;
  liveBroadcastContent: 'live' | 'upcoming' | 'none';
  // Custom fields
  channelCustomUrl?: string;
  channelThumbnail?: ThumbnailSet;
}

export interface VideoContentDetails {
  duration: string;
}

export interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  commentCount: string;
  subscriberCount?: string;
}

// Main video item interface
export interface VideoItem {
  id: string;
  snippet: VideoSnippet;
  contentDetails?: VideoContentDetails;
  statistics: VideoStatistics;
}


// Specific response types
export type VideoListResponse = YouTubeApiResponse<VideoItem>;