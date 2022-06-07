import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://randomuser.me/api/?results=100';

const useAxios = ({ url }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios.get(url)
            .then((res) => {
                setResponse(res.data.results);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { response, error, loading };
};

export default useAxios;