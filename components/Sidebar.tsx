export default function Sidebar() {
  const btnsNameList = ["Add Task", "Search", "Today", "Upcoming", "Labels"];
  return (
    <div className="bg-white w-1/5 min-h-screen flex flex-col justify-start pt-10">
      {btnsNameList?.map((btnName, index) => {
        return (
          <p
            key={index}
            className="p-2 pl-5 justify-start cursor-pointer hover:bg-gray-100 ml-2 mr-2 rounded-md"
          >
            {btnName}
          </p>
        );
      })}
    </div>
  );
}
