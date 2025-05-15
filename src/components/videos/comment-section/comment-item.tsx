"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, } from "lucide-react";

import { CommentThread } from "@/data/types/commments-response-types";
import { Button } from "@/components/ui/button";

import CommentForm from "./comment-form";
import BaseComment from "./base-comment";
import CommentReplies from "./comment-replies";

interface CommentItemProps {
    comment: CommentThread;
};

const CommentItem = ({ comment }: CommentItemProps) => {
    const replyCount = comment.snippet.totalReplyCount;

    const [isReplyOpen, setIsReplyOpen] = useState(false);
    const [isRepliesOpen, setIsRepliesOpen] = useState(false);
    return (
        <div>
            <BaseComment
                comment={comment}
                variant="topLevelComment"
                isReplyOpen={() => setIsReplyOpen(true)} 
            />
            {isReplyOpen && (
                <div className="mt-4 pl-14">
                    <CommentForm
                        variant="reply"
                        onSucess={() => {
                            setIsReplyOpen(false);
                            setIsRepliesOpen(true);
                        }}
                        onCancel={() => {
                            setIsReplyOpen(false);
                        }}
                    />
                </div>
            )}
            {replyCount > 0 && (
                <div className="pl-14">
                    <Button
                        variant={'tertiary'}
                        className="cursor-pointer"
                        size={'sm'}
                        onClick={() => { setIsRepliesOpen(!isRepliesOpen) }}
                    >
                        {isRepliesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        {replyCount} replies
                    </Button>
                </div>
            )}
            {replyCount > 0 && isRepliesOpen && (
                <CommentReplies comment={comment} />
            )}

        </div>
    )
}
export default CommentItem