import { CommentResponse } from "@/schemas";
import { differenceInDays, parseISO } from "date-fns";

interface iCommentProps {
  comment: CommentResponse;
}

const CommentsList = ({ comment }: iCommentProps) => {
  let initials = "";

  const names = comment.userName.split(" ");
  initials = names[0][0] + names[1][0];

  const dateNow = new Date();
  const targetDate = parseISO(comment.createdAt);
  const daysDifference = differenceInDays(dateNow, targetDate);

  return (
    <li className="flex flex-col gap-3 mb-11">
      <div className="flex gap-3 items-center">
        <div
          className={`
                        group/item
                        w-6
                        h-6
                        lg:w-8
                        lg:h-8
                        border-brand-1
                        border-2
                        rounded-full
                        flex
                        justify-center
                        items-center
                        transition
                        text-white
                        group-hover:border-neutral-400
                        bg-brand-1
                    `}
        >
          {initials}
        </div>
        <div
          className="
                        group/item
                        text-gray-2
                        transition
                        group-hover:text-gray-3
                        text-sm
                        "
        >
          {comment.userName}
        </div>
        <ul>
          <li className="text-gray-3 list-disc ml-4 text-xs">{`há ${Math.abs(
            daysDifference
          )} dias`}</li>
        </ul>
      </div>
      <p className="font-inter text-base text-gray-2">{comment.comment}</p>
    </li>
  );
};

export default CommentsList;
