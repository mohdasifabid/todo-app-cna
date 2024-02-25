import { Props } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const TodoCard = (props: Props) => {
  const { setIsModalOpen, data } = props;
  const { title, content, label, _id } = data;

  const queryClient = useQueryClient();
  const deleteTodoHandler = async () => {
    const endPoint = `https://todo-app-be-u8g0.onrender.com/api/todos/${_id}`;
    const response = await axios.delete(endPoint);
    return response;
  };
  const { isPending, error, mutate } = useMutation({
    mutationFn: deleteTodoHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  return (
    <div className="border-2 border-solid border-black  p-3 flex justify-between">
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <div className="flex gap-2">
          <span className="">{label}</span>
        </div>
      </div>
      <div>
        <button
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Edit
        </button>
        <button
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          onClick={() => mutate()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
