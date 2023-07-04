import { CommentResponse } from "@/schemas";
import { differenceInDays, parseISO } from "date-fns";
import menu from "../../assets/menubr.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from "..";
import UpdateComment from "./update";
import { useAppContext } from "@/contexts";
import DeleteComment from "./delete";

interface iCommentProps {
  comment: CommentResponse;
}

const CommentsList = ({ comment }: iCommentProps) => {
  const { handleOpenModal, open, modalType, setModalType } = useAppContext();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  let initials = "";

  const names = comment.userName.split(" ");
  initials = names[0][0] + names[1][0];

  const dateNow = new Date();
  const targetDate = parseISO(comment.createdAt);
  const daysDifference = differenceInDays(dateNow, targetDate);

  return (
    <li className="flex flex-col gap-3 mb-11">
      {open && modalType === `${comment.id}+1` ? (
        <UpdateComment commentId={comment.id} />
      ) : null}
      {open && modalType === comment.id ? (
        <DeleteComment commentId={comment.id} />
      ) : null}
      <div className="flex gap-3 items-center justify-between">
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
        <div className="flex flex-col items-end cursor-pointer">
          <Image
            onClick={handleMenu}
            src={menu}
            alt="menu-dropdown"
            width={24}
            height={24}
          />
          {showMenu && (
            <div className="flex flex-col gap-1 mt-1 pr-2 items-start relative">
              <div className="flex flex-col absolute top-0 right-4 bg-gray-9 shadow-custom p-4 rounded-lg gap-3 justify-start items-start">
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal();
                    setModalType(`${comment.id}+1`);
                  }}
                  className="
                        group/item
                        text-gray-2
                        transition
                        group-hover:text-gray-3
                        text-sm
                        cursor-pointer
                        "
                >
                  Editar
                </span>
                <span
                  onClick={(e) => (
                    <>
                      {e.stopPropagation()}
                      {handleOpenModal()}
                      {setModalType(comment.id)}
                    </>
                  )}
                  className="
                        group/item
                        text-gray-2
                        transition
                        group-hover:text-gray-3
                        text-sm
                        cursor-pointer
                        "
                >
                  Excluir
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="font-inter text-base text-gray-2">{comment.comment}</p>
    </li>
  );
};

export default CommentsList;
