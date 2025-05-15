"use client"

import { useUser } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { UserAvatar } from "@/components/user-avatar"

interface CommentFormProps {
    variant?: 'comment' | 'reply',
    onSucess?: () => void,
    onCancel?: () => void,
    parentId?: string,
}

const CommentForm = ({ variant = 'comment', onCancel, onSucess }: CommentFormProps) => {
    const { user, isLoaded, isSignedIn } = useUser()
    if (!isLoaded && !isSignedIn) {
        return null
    }
    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSucess?.()
    }
    const handleReplyCancel = () => {
        onCancel?.()
    }

    return (

        <form
            onSubmit={handleCommentSubmit}
            className="flex gap-4 group">
            <UserAvatar
                size={'lg'}
                imageUrl={user?.imageUrl || '/user-placeholder.svg'}
                name={user?.username || "user"}
            />
            <div className="flex-1">
                <Textarea
                    className="resize-none bg-transparent overflow-hidden min-h-0 pb-5"
                    placeholder={`${variant === 'comment' ? 'Add a comment...' : 'Add a reply...'}`}
                />
                <div className="justify-end gap-2 flex mt-2">
                    {onCancel && (
                        <Button
                            size={'sm'}
                            variant={'ghost'}
                            onClick={handleReplyCancel}
                            className="cursor-pointer"
                        >
                            Cancel
                        </Button>
                    )}
                    
                    <Button
                        type="submit"
                        size={'sm'}
                        className="cursor-pointer"
                    >
                        {variant === 'comment' ? 'Comment' : 'Reply'}
                    </Button>
                </div>
            </div>
        </form>
    )
}
export default CommentForm