
const Filter = () => {
  return (
    <div className="w-20">
      <select className="h-full border-gray-300 border-solid border outline-none">
        <option selected>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}

export default Filter