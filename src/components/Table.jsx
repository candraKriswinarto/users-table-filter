import useAxios from "../hooks/useAxios";
import moment from "moment";

const column = [
  { heading: 'Username', value: 'login.username' },
  { heading: 'Name', value: 'name.first' },
  { heading: 'Email', value: 'email' },
  { heading: 'Gender', value: 'gender' },
  { heading: 'Registered Date', value: 'registered.date' },
]

const Table = () => {
  const { response, loading } = useAxios('');
  console.log(response);

  if(loading) {
    return <p>Loading....</p>
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} key={index} />)}
        </tr>
      </thead>
      <tbody>
        {response.map((item, index) => <TableRow item={item} column={column} key={index} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item, index }) => <th key={index} scope="col" className="px-6 py-3">{item.heading}</th>
const TableRow = ({ item, column, index }) => (
  <tr key={index} className="border-b">
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.');
        const itemValue = item[itemSplit[0]][itemSplit[1]];

        if(itemSplit.includes('date')) {
          return <td key={index} className="px-6 py-4">{moment(itemValue).format('YYYY/MM/DD')}</td>
        }
        if(itemSplit.includes('name')) {
          return <td key={index} className="px-6 py-4">{`${itemValue} ${item[itemSplit[0]]['last']}`}</td>
        }
        return <td key={index} className="px-6 py-4">{itemValue}</td>
      }

      return <td key={index} className="px-6 py-4">{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table