"use client";

import { Todo } from "../lib/definitions";
import { Pagination } from "./Pagination";
import { TodoCard } from "./TodoCard";


export function TodosListingPage({
  setIsModalOpen,
  data,
  setEditingTodoObj,
  setCurrentPageNumber
}: any) {

  return (
    <div className="w-1/2 bg-green-100 p-2 pl-5 pr-5">
      <h1 className="text-2xl pt-4 text-center font-bold pb-4">My Todos</h1>
      {data?.todos?.map((todoObj: Todo) => {
        return (
          <TodoCard
            data={todoObj}
            key={todoObj._id}
            setIsModalOpen={setIsModalOpen}
            setEditingTodoObj={setEditingTodoObj}
          />
        );
      })}
      <Pagination pageInfo={data?.pageInfo} setCurrentPageNumber={setCurrentPageNumber}/>
    </div>
  );
}
