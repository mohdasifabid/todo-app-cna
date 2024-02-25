import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Props } from "@/types";

export const TodoCard = (props: Props) => {
  const { setIsModalOpen, data, setEditingTodoObj } = props;
  const { title, content, label, _id } = data;

  const queryClient = useQueryClient();

  const deleteTodoHandler = async () => {
    const endPoint = `https://todo-app-be-u8g0.onrender.com/api/todos/${_id}`;
    const response = await axios.delete(endPoint);
    return response;
  };

  const { mutate } = useMutation({
    mutationFn: deleteTodoHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const onEditHandler = () => {
    setIsModalOpen(true);
    setEditingTodoObj(data);
  };
  
  return (
    <div className="border-2 border-solid border-black  p-3 flex justify-between">
      <div className="w-full">
        <p>{title}</p>
        <p>{content}</p>
        <div className="flex  justify-between w-full">
          <span className="">{label}</span>
          <div>
            <button
              className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
              onClick={onEditHandler}
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
      </div>
    </div>
  );
};
