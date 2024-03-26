"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import AddTask from "./addTask";
import { TodosListingPage } from "./TodosListingPage";
import { EditTodo } from "./EditTodo";


export default function ManageTodo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodoObj, setEditingTodoObj] = useState({});
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const queryEndPoint = `https://todo-app-be-u8g0.onrender.com/api/todos?page=${currentPageNumber}&pageSize=5`;

  const getData = async () => {
    const res = await axios.get(queryEndPoint);
    return res.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["todos", { page: currentPageNumber }],
    queryFn: getData,
  });

  if (isPending) {
    return (
      <main className="flex min-h-screen justify-center items-center">
        <h1 className="text-4xl">loading...</h1>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen">
      <AddTask />
      <TodosListingPage
        setIsModalOpen={setIsModalOpen}
        data={data}
        setEditingTodoObj={setEditingTodoObj}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      {isModalOpen && (
        <div className="absolute w-full min-h-screen flex justify-center items-center">
          <EditTodo setIsModalOpen={setIsModalOpen} data={editingTodoObj} />
        </div>
      )}
    </main>
  );
}
