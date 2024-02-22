
export default function Sidebar() {
  return (
    <div className="bg-white w-1/5 min-h-screen flex flex-col justify-start pt-10">
      <a className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md">
        Add Task
      </a>
      <a className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md">
        Search
      </a>
      <a className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md">
        Today
      </a>
      <a className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md">
        Upcoming
      </a>
      <a className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md">
        Labels
      </a>
    </div>
  );
}
