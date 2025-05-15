// API response interface
export interface YouTubeApiResponse<T> {
    kind: string;
    etag: string;
    items: T[];
    nextPageToken?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}