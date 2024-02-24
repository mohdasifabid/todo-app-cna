export default function AddTask() {
  return (
    <div className="w-1/3 bg-blue-100 min-h-screen">
      <h1 className="text-2xl pt-4 text-center font-bold pb-2">
        Add a new task
      </h1>
      <hr />
      <label className="flex justify-between p-4">
        <span className="pr-2">Title</span>
        <input className="w-full pl-2 focus:outline-none" />
      </label>
      <label className="flex justify-between p-4">
        <span className="pr-2">Content</span>
        <input className="w-full pl-2 focus:outline-none" />
      </label>
      <label className="flex justify-between p-4">
        <span className="pr-2">Label</span>
        <input className="w-full pl-2 focus:outline-none" />
      </label>
      <hr />
      <div className="flex justify-end p-2 gap-3">
        <button className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md">
          Cancel
        </button>
        <button className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md">
          Add
        </button>
      </div>
      <hr />
    </div>
  );
}
