export const Pagination = ({ pageInfo }: { pageInfo: any }) => {
  const { currentPage, pageSize, totalRecords, totalPages } = pageInfo;
  const arr = Array.from({ length: totalPages });

  return (
    <div className="w-full flex justify-center p-2">
      {arr?.map((item, index) => {
        return (
          <button
            value={index + 1}
            key={index}
            className="pl-2 pr-2 pt-1 pb-1 border-2 rounded-md bg-black text-white"
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
