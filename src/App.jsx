import Filter from "./components/Filter"
import InputSearch from "./components/InputSearch"
import Table from "./components/Table"

function App() {

  const column = [
    { heading: 'Username' },
    { heading: 'Name' },
    { heading: 'Email' },
    { heading: 'Gender' },
    { heading: 'Registered Date' },
  ]

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <div className="flex gap-4 mb-6">
        <InputSearch />
        <Filter />
      </div>
      <Table column={column} />
    </div>
  )
}

export default App
