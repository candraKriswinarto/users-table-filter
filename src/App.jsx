import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"
import Filter from "./components/Filter"
import InputSearch from "./components/InputSearch"
import Table from "./components/Table"
import useAxios from "./hooks/useAxios";

function App() {
  const { response, loading } = useAxios('');
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(response.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(response.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % response.length;
    setItemOffset(newOffset);
  };

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4">
      <div className="flex gap-4 mb-6">
        <InputSearch />
        <Filter />
      </div>
      <Table data={currentItems} />
      <div className="flex items-center justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName='inline-flex -space-x-px my-10'
          pageLinkClassName='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          previousLinkClassName='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          nextLinkClassName='py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          breakLinkClassName='py-2 px-3 border border-gray-300'
          activeLinkClassName='bg-gray-200'
        />
      </div>
    </div>
  )
}

export default App
