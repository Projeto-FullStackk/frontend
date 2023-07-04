import { useComments } from "@/contexts/commentsContext";
import { Modal } from "..";
import { fontInter } from "@/styles/font";

interface iDeleteData {
  commentId: string;
}

const DeleteComment = ({ commentId }: iDeleteData) => {
  const { deleteComment } = useComments();

  return (
    <Modal title="Deletar comentário">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-3 items-center"
      >
        <h2 className={`${fontInter.className} font-bold`}>
          Deseja realmente apagar seu comentário?
        </h2>
        <div className="flex gap-2.5">
          <button
            onClick={(e) => (
              <>
                {e.stopPropagation()}
                {deleteComment(commentId)}
              </>
            )}
            className={`${fontInter.className} text-center w-full button-brand h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
          >
            Deletar
          </button>

          <button
            className={`${fontInter.className} text-center w-full button-grey h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteComment;
