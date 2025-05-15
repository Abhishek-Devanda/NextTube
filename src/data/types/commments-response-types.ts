import { YouTubeApiResponse } from "./base-types";

// Author information
export interface CommentAuthor {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
        value: string;
    };
}

// Base comment snippet shared properties
export interface BaseCommentSnippet {
    channelId: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
}

// Regular comment snippet (extends base with author info)
export interface CommentSnippet extends BaseCommentSnippet, CommentAuthor { }

// Reply comment snippet (extends regular with parent reference)
export interface ReplyCommentSnippet extends CommentSnippet {
    parentId: string;
}

// Comment structure
export interface Comment {
    kind: string;
    etag: string;
    id: string;
    snippet: CommentSnippet;
}

// Reply comment structure
export interface ReplyComment {
    kind: string;
    etag: string;
    id: string;
    snippet: ReplyCommentSnippet;
}

// Comment thread snippet
export interface CommentThreadSnippet {
    channelId: string;
    videoId: string;
    topLevelComment: Comment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
}

// Comment thread with replies
export interface CommentThread {
    kind: string;
    etag: string;
    id: string;
    snippet: CommentThreadSnippet;
    replies?: {
        comments: ReplyComment[];
    };
}

// Comment thread response
export type CommentThreadListResponse = YouTubeApiResponse<CommentThread>;