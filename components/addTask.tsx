"use client";
import { Todo, Payload } from "@/types";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const endPoint = "https://todo-app-be-u8g0.onrender.com/api/todos";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const queryClient = useQueryClient();
  async function addTaskHandler() {
    const response = await axios.post(endPoint, { title, content, label });
    setTitle("");
    setContent("");
    setLabel("");
    return response;
  }

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: addTaskHandler,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const payload: Payload = {
    title,
    content,
    label,
  };
  const isFieldEmpty = !title && !content && !label;
  return (
    <div className="w-1/2 bg-blue-100 min-h-screen pl-5 pr-5">
      <h1 className="text-2xl pt-4 text-center font-bold pb-2">
        Add a new task
      </h1>
      <hr />
      <label className="flex justify-between p-4">
        <span className="pr-2">Title</span>
        <input
          value={title}
          className="w-full pl-2 focus:outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="flex justify-between p-4">
        <span className="pr-2">Content</span>
        <input
          value={content}
          className="w-full pl-2 focus:outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label className="flex justify-between p-4">
        <span className="pr-2">Label</span>
        <input
          value={label}
          className="w-full pl-2 focus:outline-none"
          onChange={(e) => setLabel(e.target.value)}
        />
      </label>
      <hr />
      <div className="flex justify-end p-2 gap-3">
        <button
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          disabled={isLoading}
          onClick={() => {
            setTitle("");
            setContent("");
            setLabel("");
          }}
        >
          Cancel
        </button>
        <button 
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          onClick={() => mutate(payload)}
          disabled={isLoading || isFieldEmpty}
        >
          Add
        </button>
      </div>
      <hr />
    </div>
  );
}
