
const Filter = () => {
  return (
    <div>
      <label className="text-sm text-gray-700">Filter</label>
      <div className="bg-gray-50 w-24">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">
          <option defaultValue>All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  )
}

export default Filter