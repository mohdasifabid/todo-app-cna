"use client";

import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function EditTodo(props: any) {
  const { data, setIsModalOpen } = props;
  const { title, content, label, _id } = data;
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [updatedLabel, setUpdatedLabel] = useState(label);
  const queryClient = useQueryClient();

  const payload = {
    title: updatedTitle,
    content: updatedContent,
    label: updatedLabel,
  };

  const updateTodoHandler = async () => {
    const endPoint = `https://todo-app-be-u8g0.onrender.com/api/todos/${_id}`;
    const res = await axios.put(endPoint, payload);
    setIsModalOpen(false);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: updateTodoHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <div className="w-1/2 border-4 border-solid border-white relative bg-red-200 p-2">
      <button
        onClick={() => setIsModalOpen(false)}
        className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md absolute top-1 right-1"
      >
        Close
      </button>
      <div>
        <h1 className="text-2xl pt-4 text-center font-bold pb-2">Edit Todo</h1>
        <hr />
        <label className="flex justify-between p-4">
          <span className="pr-2">Title</span>
          <input
            onChange={(e) => setUpdatedTitle(e.target.value)}
            value={updatedTitle}
            className="w-full pl-2 focus:outline-none"
          />
        </label>
        <label className="flex justify-between p-4">
          <span className="pr-2">Content</span>
          <textarea
            onChange={(e) => setUpdatedContent(e.target.value)}
            value={updatedContent}
            className="w-full min-h-5 pl-2 focus:outline-none"
          />
        </label>
        <label className="flex justify-between p-4">
          <span className="pr-2">Label</span>
          <input
            onChange={(e) => setUpdatedLabel(e.target.value)}
            value={updatedLabel}
            className="w-full pl-2 focus:outline-none"
          />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          onClick={() => mutate()}
        >
          Update
        </button>
      </div>
    </div>
  );
}
