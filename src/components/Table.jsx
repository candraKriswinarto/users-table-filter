
const Table = ({ column }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="px-6 py-4">john@mail.com</td>
          <td className="px-6 py-4">John doe</td>
          <td className="px-6 py-4">john@mail.com</td>
          <td className="px-6 py-4">male</td>
          <td className="px-6 py-4">11/24/2022</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-4">john@mail.com</td>
          <td className="px-6 py-4">John doe</td>
          <td className="px-6 py-4">john@mail.com</td>
          <td className="px-6 py-4">male</td>
          <td className="px-6 py-4">11/24/2022</td>
        </tr>
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th scope="col" className="px-6 py-3">{item.heading}</th>

export default Table