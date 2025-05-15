import { CommentThread, } from '@/data/types/commments-response-types';
import { VIDEO_COMMENTS_MAX_RESULTS } from '../constants';
import { fetchYouTubeAPI } from './base-api';

export const videoComments = async (videoId: string) => {
    type Params = {
        part: string;
        videoId: string;
        maxResults: string;
    };
    // Prepare parameters for the fetch request
    const commentsParams: Params = {
        part: 'snippet,replies',
        videoId: videoId,
        maxResults: VIDEO_COMMENTS_MAX_RESULTS.toString(),
    };

    const commentsThread = await fetchYouTubeAPI('commentThreads', commentsParams)
    return commentsThread.items as CommentThread[];
}