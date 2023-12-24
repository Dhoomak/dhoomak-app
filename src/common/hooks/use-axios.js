
import { useState, useEffect } from 'react';

const useAxios = (fetchFn) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await fetchFn();
            setResponse(res.data);
        } catch (error) {
            setError(err);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { response, error, loading };
};

export default useAxios;