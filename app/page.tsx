"use client";
import { EditTodo } from "@/components/EditTodo";
import Sidebar from "@/components/Sidebar";
import { TodosListingPage } from "@/components/TodosListingPage";
import AddTask from "@/components/addTask";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
const endPoint = "https://todo-app-be-u8g0.onrender.com/api/todos";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodoObj, setEditingTodoObj] = useState({});

  const getData = async () => {
    const res = await axios.get(endPoint);
    return res.data;
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
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
      />
      {isModalOpen && (
        <div className="absolute w-full min-h-screen flex justify-center items-center">
          <EditTodo setIsModalOpen={setIsModalOpen} data={editingTodoObj} />
        </div>
      )}
    </main>
  );
}
