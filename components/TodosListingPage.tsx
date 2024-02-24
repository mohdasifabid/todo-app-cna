"use client";
import { Todo } from "@/types";
import { TodoCard } from "./TodoCard";

export function TodosListingPage({ setIsModalOpen, data }: any) {
  return (
    <div className="w-1/2 bg-green-100 p-2">
      <h1 className="text-2xl pt-4 text-center font-bold pb-4">My Todos</h1>
      {data.map((todoObj: Todo) => {
        return (
          <TodoCard
            data={todoObj}
            key={todoObj._id}
            setIsModalOpen={setIsModalOpen}
          />
        );
      })}
    </div>
  );
}
