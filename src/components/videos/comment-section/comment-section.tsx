import { videoComments } from "@/data/api/comments";
import { expandedNumber } from "@/lib/formatData";

import CommentForm from "./comment-form";
import CommentItem from "./comment-item";

interface CommentSectionProps {
  videoId: string;
  commentCount: number;
  liveContent?: string;
}

const CommentSection = async ({ videoId, commentCount, liveContent }: CommentSectionProps) => {
  if (liveContent === 'live') {
    return (
      <div className="mt-6 flex items-center justify-center text-muted-foreground">
        Comments for live content are not available
      </div>
    )
  }
  const comments = await videoComments(videoId);

  return (
    <div className="mt-6 flex flex-col gap-6">
      <h1>{expandedNumber(commentCount)} comments</h1>
      <CommentForm variant="comment" />
      <div className="flex flex-col gap-4 mt-2">
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}

      </div>
    </div>
  )
}
export default CommentSection;
