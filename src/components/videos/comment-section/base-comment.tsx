"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { compactDate } from "@/lib/formatData";
import { CommentThread, ReplyComment } from "@/data/types/commments-response-types";

import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MessageSquareIcon, MoreVerticalIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

interface BaseCommentPropType {
    comment: CommentThread;
    variant: 'topLevelComment' | 'reply';
    reply?: ReplyComment;
    isReplyOpen?: () => void;
}

const BaseComment = ({ comment, variant, reply, isReplyOpen }: BaseCommentPropType) => {

    // Get the correct data based on variant
    const authorDisplayName = variant === 'topLevelComment'
        ? comment.snippet.topLevelComment.snippet.authorDisplayName
        : reply?.snippet.authorDisplayName

    const authorProfileImageUrl = variant === 'topLevelComment'
        ? comment.snippet.topLevelComment.snippet.authorProfileImageUrl
        : reply?.snippet.authorProfileImageUrl;

    const publishedAt = variant === 'topLevelComment'
        ? comment.snippet.topLevelComment.snippet.publishedAt
        : reply?.snippet.publishedAt;

    const textOriginal = variant === 'topLevelComment'
        ? comment.snippet.topLevelComment.snippet.textOriginal
        : reply?.snippet.textOriginal;

    const likeCount = variant === 'topLevelComment'
        ? comment.snippet.topLevelComment.snippet.likeCount
        : reply?.snippet.likeCount;

    return (
        <div className="flex gap-4 ">
            <Link href={`/channel/${authorDisplayName}`}>
                <UserAvatar
                    imageUrl={authorProfileImageUrl || '/user-placeholder.svg'}
                    size='lg'
                    name={authorDisplayName || ''} />
            </Link>
            <div className="flex-1 min-w-0 ">
                <Link href={`/channel/${authorDisplayName}`}>
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-sm pb-0.5">
                            {authorDisplayName}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {compactDate(publishedAt || '')}
                        </span>
                    </div>
                </Link>
                <p className="text-sm whitespace-pre-wrap">{textOriginal}</p>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center ">
                        <Button
                            size='icon'
                            variant='ghost'
                            onClick={() => { }}
                            className="size-8 cursor-pointer"
                        >
                            <ThumbsUpIcon className={cn()} />
                        </Button>
                        <span className="text-xs text-muted-foreground">
                            {likeCount}
                        </span>
                        <Button
                            size='icon'
                            variant='ghost'
                            onClick={() => { }}
                            className="size-8 cursor-pointer"
                        >
                            <ThumbsDownIcon className={cn()} />
                        </Button>
                    </div>
                    {variant === 'topLevelComment' && (
                        <Button
                            size='sm'
                            variant='ghost'
                            className="h-8 rounded-2xl cursor-pointer"
                            onClick={isReplyOpen}
                        >
                            Reply
                        </Button>
                    )}

                </div>
            </div>
            {variant === 'topLevelComment' && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} size={'icon'} className="size-8 cursor-pointer">
                            <MoreVerticalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={isReplyOpen}
                        >
                            <MessageSquareIcon className="size-4" />
                            Reply
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    )
}
export default BaseComment