export function EditTodo({ setIsModalOpen }:any) {
  return (
    <div className="w-1/2 border-4 border-solid border-white relative bg-red-200">
      <button
        onClick={() => setIsModalOpen(false)}
        className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md absolute top-1 right-1"
      >
        Close
      </button>
      <div>
        <h1 className="text-2xl pt-4 text-center font-bold pb-2">Edit Todo</h1>
        <hr />
        <label className="flex justify-between p-4">
          <span className="pr-2">Title</span>
          <input className="w-full pl-2 focus:outline-none" />
        </label>
        <label className="flex justify-between p-4">
          <span className="pr-2">Content</span>
          <textarea className="w-full min-h-5 pl-2 focus:outline-none" />
        </label>
        <label className="flex justify-between p-4">
          <span className="pr-2">Label</span>
          <input className="w-full pl-2 focus:outline-none" />
        </label>
      </div>
    </div>
  );
}
