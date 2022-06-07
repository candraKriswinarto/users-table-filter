import Filter from "./components/Filter"
import InputSearch from "./components/InputSearch"

function App() {

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <div className="flex justify-between">
        <InputSearch />
        <Filter />
      </div>
    </div>
  )
}

export default App
