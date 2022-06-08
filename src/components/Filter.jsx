import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const Filter = () => {
  const { filter, setFilter, fetchData } = useContext(UsersContext);

  const handleChange = e => {
    setFilter({ ...filter, gender: e.target.value });
    let url = `?page=${filter.page}&pageSize=10&results=10`;
    if(e.target.value) {
      url += `&gender=${e.target.value}`;
    }
    if(filter.keyword) {
      url += `&keyword=${filter.keyword}`;
    }
    fetchData(url);
  }

  return (
    <div>
      <label className="text-sm text-gray-700">Filter</label>
      <div className="bg-gray-50 w-24">
        <select value={filter.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">
          <option defaultValue value=''>All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  )
}

export default Filter