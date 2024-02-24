"use client";
import { useState } from "react";

export function TodosListingPage() {
  return (
    <div className="w-1/2 bg-green-100 p-2 ">
      <h1 className="text-2xl pt-4 text-center font-bold pb-4">My Todos</h1>
      <div className="border-2 border-solid border-black  p-3 flex justify-between">
        <div>
          <p>Title</p>
          <p>Content</p>
          <div className="flex gap-2">
            <span className="">labels</span>
            <span>labels</span>
          </div>
        </div>
        <div>
          <button className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md">
            Edit
          </button>
          <button className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
