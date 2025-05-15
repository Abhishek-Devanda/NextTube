import { Loader2Icon } from "lucide-react"
import BaseComment from "./base-comment";
import { CommentThread } from "@/data/types/commments-response-types";

interface CommentRepliesType {
  comment: CommentThread;
};

const CommentReplies = ({ comment }: CommentRepliesType) => {
  const isLoading = false
  return (
    <div className="pl-14">
      <div className="flex flex-col gap-2 mt-2">
        {isLoading && (
          <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
        )}
        {!isLoading && (
          comment?.replies?.comments.map((reply) => (
            <BaseComment key={comment.id} comment={comment} variant="reply" reply={reply} />
          ))
        )}
      </div>
    </div>
  )
}
export default CommentReplies