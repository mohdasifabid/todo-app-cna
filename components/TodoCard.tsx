import { Props } from "@/types";

export const TodoCard = (props: Props) => {
  const { setIsModalOpen, data } = props;
  const { title, content, label } = data;

  return (
    <div className="border-2 border-solid border-black  p-3 flex justify-between">
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <div className="flex gap-2">
          <span className="">{label}</span>
        </div>
      </div>
      <div>
        <button
          className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Edit
        </button>
        <button className="border pt-1 pl-3 pr-3 pb-1 bg-black text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};
