import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaylistItem } from '@/data/types/playlist-response-types';
import { cn } from '@/lib/utils';
import { ListVideoIcon } from 'lucide-react';

interface PlaylistGridCardProps {
    playlist: PlaylistItem;
    className?: string;
}
const PlaylistGridCard = ({ playlist, className }: PlaylistGridCardProps) => {
    const thumbnailUrl = playlist.snippet.thumbnails.medium?.url || playlist.snippet.thumbnails.default?.url || '/placeholder.svg'; // Fallback image

    return (
        <Link href={`/playlists/${playlist.id}`} className={cn("group flex flex-col gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors", className)}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                    src={thumbnailUrl}
                    alt={playlist.snippet.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay with video count */}
                <div className="absolute bottom-0 right-0 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded-tl-md rounded-br-lg flex items-center gap-1">
                    <ListVideoIcon className="size-3" />
                    <span>{playlist.contentDetails.itemCount} videos</span>
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-medium line-clamp-2 text-sm sm:text-base mb-1 group-hover:text-foreground">
                    {playlist.snippet.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1 mb-1 hover:text-foreground">
                    {playlist.snippet.channelTitle}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                    {playlist.status.privacyStatus === 'public' ? 'Public' : 'Private/Unlisted'} Playlist
                </p>
            </div>
        </Link>
    );
};

export default PlaylistGridCard;