import { useEffect, useState } from "react";


// fetcher med GET. 
export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setError(err));
    }, [url]);

    return { data, error };
};