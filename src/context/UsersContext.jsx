import { createContext, useEffect, useState } from "react"
import useAxios from "../hooks/useAxios";

export const UsersContext = createContext()
const UsersProvider = ({ children }) => {
  const { fetchData, response, loading } = useAxios();
  const [filter, setFilter] = useState({
    keyword: "",
    gender: "",
    page: 1
  });

  const providerValue = {
    filter, setFilter,
    fetchData, response, loading
  }

  useEffect(() => {
    fetchData('?page=1&pageSize=10&results=10')
  }, [])

  return (
    <UsersContext.Provider value={providerValue}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider