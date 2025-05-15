import { fetchYouTubeAPI } from "./base-api";

type ChannelSearchParamsType = {
    id?: string;
    forHandle?: string;
    part: string;
    mine?: string;
    fields?: string;
};
export const channelList = async (channelIdsList: string[]) => {

    const channelIds = channelIdsList.join(',');
    const channelParams: ChannelSearchParamsType = {
        id: channelIds,
        part: 'snippet,statistics',
        // fields: 'items(id,snippet(thumbnails(default(url))))',
    };
    const channelListResponse = await fetchYouTubeAPI('channels', channelParams)

    return channelListResponse;

};

export const channelData = async (handle: string, mine?: boolean) => {

    const channelParams: ChannelSearchParamsType = {
        forHandle: handle,
        part: 'snippet,statistics,contentDetails',
    };
    if (mine) {
        channelParams.mine = 'true';
        delete channelParams.forHandle; 
    }
    const channelListResponse = await fetchYouTubeAPI('channels', channelParams)

    return channelListResponse;
}