"use client";
import { EditTodo } from "@/components/EditTodo";
import Sidebar from "@/components/Sidebar";
import { TodosListingPage } from "@/components/TodosListingPage";
import AddTask from "@/components/addTask";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="flex min-h-screen">
      <AddTask />
      <TodosListingPage setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <div className="absolute w-full min-h-screen flex justify-center items-center">
          <EditTodo setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </main>
  );
}
