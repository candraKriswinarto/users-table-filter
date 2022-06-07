
const Filter = () => {
  return (
    <div className="bg-gray-50 w-24">
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">
        <option selected>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}

export default Filter