import { CommentData, CommentList, CommentResponse } from "@/schemas";
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
        location.reload();
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

  useEffect(() => {
    carId
      ? api.get(`ads/${carId}`).then(async (response) => {
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
        })
      : null;
  }, [carId]);

  return (
    <CommentsContext.Provider value={{ createComment, comments }}>
      {children}
    </CommentsContext.Provider>
  );
};

const useComments = () => useContext(CommentsContext);

export { CommentsProvider, useComments };
