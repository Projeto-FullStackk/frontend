import { useAuth } from "@/contexts";
import { useComments } from "@/contexts/commentsContext";
import { CommentData, commentSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const UserComment = () => {
  const { userLogged } = useAuth();
  const { createComment } = useComments();

  const { register, handleSubmit, setValue } = useForm<CommentData>({
    resolver: zodResolver(commentSchema),
  });

  let initials = "";
  if (userLogged && userLogged.name) {
    const names = userLogged.name.split(" ");
    initials = names[0][0] + names[1][0];
  }

  const submitComments = (formData: CommentData) => {
    createComment(formData);
    setValue("comment", "");
  };

  const predeterminedComment = (event) => {
    const newValue = event.target.value;
    setValue("comment", newValue);
  };

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-3 items-center">
        <div
          className={`
                          cursor-pointer
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
                          cursor-pointer
                          group/item
                          text-gray-2
                          transition
                          group-hover:text-gray-3
                          text-sm
                          "
        >
          {userLogged?.name}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(submitComments)}
        className="flex flex-col items-end h-32 rounded border-gray-7 border-2 lg:w-[42rem] w-[21.9375rem]"
      >
        <input
          id="comment-input"
          className="font-inter text-base text-gray-2 text-start  p-7 w-full border-none focus:outline-none focus:bg-white focus:shadow-none"
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          {...register("comment")}
        />
        <button
          type="submit"
          className="button-brand flex items-center	 w-28 h-[2.375rem] rounded mr-2.5 text-sm py-3 px-5"
        >
          Comentar
        </button>
      </form>

      <div className="flex gap-2 font-medium">
        <button
          value="Gostei muito"
          onClick={predeterminedComment}
          className="button-grey px-3 rounded-3xl text-gray-3 text-xs font-medium h-6"
        >
          Gostei muito
        </button>
        <button
          value="Incrível"
          onClick={predeterminedComment}
          className="button-grey px-3 rounded-3xl text-gray-3 text-xs font-medium h-6"
        >
          Incrível
        </button>
        <button
          value="Recomendarei para meus amigos!"
          onClick={predeterminedComment}
          className="button-grey px-3 rounded-3xl text-gray-3 text-xs font-medium h-6"
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </div>
  );
};

export default UserComment;
