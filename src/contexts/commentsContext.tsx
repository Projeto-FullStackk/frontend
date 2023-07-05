import { CommentData, CommentResponse } from "@/schemas";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface iProps {
  children: ReactNode;
}

interface iCommentsProvider {
  createComment: (commentData: CommentData) => void;
  comments: CommentResponse[];
  updateComment: (commentId: string, commentData: CommentData) => void;
  deleteComment: (commentId: string) => void;
}

const CommentsContext = createContext<iCommentsProvider>(
  {} as iCommentsProvider
);

const CommentsProvider = ({ children }: iProps) => {
  const cookie = parseCookies();
  const router = useRouter();
  const { carId } = router.query;
  const [comments, setComments] = useState([] as CommentResponse[]);

  const token = cookie["motorShop.token"];

  const createComment = (commentData: CommentData) => {
    const comment = {
      comment: commentData.comment,
      adsId: carId,
    };

    api
      .post("comments", comment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao comentar, o comentário não pode ser vazio !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const request = () => {
    api.get(`ads/${carId}`).then(async (response) => {
      const data = response.data;

      const comment = data.Comment;

      const commentMap = await Promise.all(
        comment.map(async (element: CommentResponse) => {
          const user = await api.get(`user/${element.userId}`);
          const response = {
            comment: element.comment,
            adsId: element.adsId,
            createdAt: element.createdAt,
            id: element.id,
            userName: user.data.name,
            userId: element.userId,
          };
          return response;
        })
      );

      setComments(commentMap);
    });
  };

  useEffect(() => {
    carId ? request() : null;
  }, [carId, request]);

  const updateComment = (commentId: string, commentData: CommentData) => {
    api
      .patch(`comments/${commentId}`, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Atualização realizada com successo", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao atualizar comentário", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteComment = (commentId: string) => {
    api
      .delete(`comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Comentário apagado", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao deletar comentário", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <CommentsContext.Provider
      value={{ createComment, comments, updateComment, deleteComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

const useComments = () => useContext(CommentsContext);

export { CommentsProvider, useComments };
