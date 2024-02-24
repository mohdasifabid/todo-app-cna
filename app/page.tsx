import Sidebar from "@/components/Sidebar";
import { TodosListingPage } from "@/components/TodosListingPage";
import AddTask from "@/components/addTask";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <AddTask/>
      <TodosListingPage/>
    </main>
  );
}
