const { useState, useEffect } = require("react")

const useFetch =(fetchFunction, autoFetch= true)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchData= async()=>{
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);
        } catch (err) {
            setError(err instanceof Error? err: new Error('An error occurred'));
        }finally{
            setLoading(false);
        }
    }

    const reset =()=>{
        setData([]);
        setLoading(false);
        setError(null);
    }

    useEffect(()=>{
        if (autoFetch) {
            fetchData();
        }
    },[fetchFunction]);

    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch