"use client";
import { Todo } from "@/types";
import { TodoCard } from "./TodoCard";
import { Pagination } from "./Pagination";
import { useState } from "react";

export function TodosListingPage({
  setIsModalOpen,
  data,
  setEditingTodoObj,
}: any) {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const {todos, pageInfo} = data

  return (
    <div className="w-1/2 bg-green-100 p-2 pl-5 pr-5">
      <h1 className="text-2xl pt-4 text-center font-bold pb-4">My Todos</h1>
      {todos && todos?.map((todoObj: Todo) => {
        return (
          <TodoCard
            data={todoObj}
            key={todoObj._id}
            setIsModalOpen={setIsModalOpen}
            setEditingTodoObj={setEditingTodoObj}
          />
        );
      })}
      <Pagination totalTodos={5} pageInfo={pageInfo}/>
    </div>
  );
}
