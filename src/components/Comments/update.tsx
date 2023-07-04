import { useComments } from "@/contexts/commentsContext";
import { CommentData, UpdateComment, commentSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Modal } from "..";

interface iUpdateData {
  commentId: string;
}

const UpdateComment = ({ commentId }: iUpdateData) => {
  const { updateComment } = useComments();

  const { register, handleSubmit, setValue } = useForm<UpdateComment>({
    resolver: zodResolver(commentSchema),
  });

  const submitComments = (formData: CommentData) => {
    updateComment(commentId, formData);
    setValue("comment", "");
  };

  return (
    <Modal title="Editar comentário">
      <form
        onSubmit={handleSubmit(submitComments)}
        className="flex flex-col items-end rounded border-gray-7 border-2 "
      >
        <input
          id="comment-input"
          className="font-inter text-base text-gray-2 text-start  p-7 w-full border-none focus:outline-none focus:bg-white focus:shadow-none"
          placeholder="Atualize seu comentário"
          {...register("comment")}
        />
        <button
          type="submit"
          className="button-brand flex items-center	 w-28 h-[2.375rem] rounded mb-2.5 mr-2.5 text-sm py-3 px-5"
        >
          Comentar
        </button>
      </form>
    </Modal>
  );
};

export default UpdateComment;
