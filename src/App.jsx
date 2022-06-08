import { useContext } from "react";
import ReactPaginate from "react-paginate"
import Filter from "./components/Filter"
import InputSearch from "./components/InputSearch"
import Table from "./components/Table"
import { UsersContext } from "./context/UsersContext";

function App() {
  const { setFilter, filter, fetchData } = useContext(UsersContext);

  const handlePageClick = (event) => {
    setFilter({ ...filter, page: event.selected+1 });
    let url = `?page=${event.selected+1}&pageSize=10&results=10`;
    if(filter.gender) {
      url += `&gender=${filter.gender}`;
    }
    if(filter.keyword) {
      url += `&keyword=${filter.keyword}`;
    }
    fetchData(url);
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4">
      <div className="flex gap-4 mb-6">
        <InputSearch />
        <Filter />
      </div>
      <Table />
      <div className="flex items-center justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={15}
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
