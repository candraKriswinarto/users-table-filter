import Filter from "./components/Filter"
import InputSearch from "./components/InputSearch"
import Table from "./components/Table"
import useAxios from "./hooks/useAxios"

function App() {

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4">
      <div className="flex gap-4 mb-6">
        <InputSearch />
        <Filter />
      </div>
      <Table />
    </div>
  )
}

export default App
