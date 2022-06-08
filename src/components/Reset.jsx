import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const Reset = () => {
  const { setFilter, fetchData } = useContext(UsersContext);

  const handleReset = () => {
    setFilter({
      keyword: "",
      gender: "",
      page: 1
    });
    fetchData('?page=1&pageSize=10&results=10')
  }

  return (
    <button onClick={handleReset} className="text-sm border border-gray-300 bg-gray-50 px-4 py-2 h-10 rounded-lg hover:bg-red-100">Reset Filter</button>
  )
}

export default Reset;