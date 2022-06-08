import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://randomuser.me/api';

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try{
      setLoading(true);
      const res = await axios(url);
      setResponse(res.data.results)
    }catch(err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  
  return {
    response,
    loading,
    error,
    fetchData: url => fetchData(url)
  }
}

export default useAxios