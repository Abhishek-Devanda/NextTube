"use client";
import { ListPlusIcon, MoreVerticalIcon, ShareIcon, Trash2Icon } from "lucide-react";
import { Button } from "../../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu";

interface VideoMenuProps {
  videoId: string;
  variant?: 'ghost' | 'secondary';
  onRemove?: () => void;
}
const VideoMenu = ({ videoId, variant='ghost', onRemove }: VideoMenuProps) => {
  const onShare = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/videos/${videoId}`);
  }
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant={variant} size={'icon'} className="rounded-full">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={e => e.stopPropagation()}>
        <DropdownMenuItem onClick={onShare} className="cursor-pointer">
          <ShareIcon className="size-4 mr-2" />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => { }} className="cursor-pointer">
          <ListPlusIcon className="size-4 mr-2" />
          Add to Playlist
        </DropdownMenuItem>
        {onRemove &&
          (<DropdownMenuItem onClick={() => { }} className="cursor-pointer">
            <Trash2Icon className="size-4 mr-2" />
            Remove
          </DropdownMenuItem>)}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default VideoMenu