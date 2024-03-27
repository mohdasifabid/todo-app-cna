export const Pagination = (props: any) => {
  const { pageInfo, setCurrentPageNumber } = props;
  const arr = Array.from({ length: pageInfo?.totalPages || 5 });
  
  return (
    <div className="w-full flex justify-center p-2">
      {arr?.map((item, index) => {
        return (
          <button
            disabled={arr?.length === 1}
            value={index + 1}
            key={index}
            className={`${
              arr?.length === 1
            } ? cursor-not-allowed  : pl-2 pr-2 pt-1 pb-1 border-2 rounded-md ${
              pageInfo?.currentPage === index + 1
                ? "bg-black text-white"
                : "bg-slate-100 text-black"
            }`}
            onClick={(e: any) => {
              setCurrentPageNumber(e.target.value);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
