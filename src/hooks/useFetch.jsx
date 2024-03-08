import { useEffect, useState } from "react";


// costume hook. fetcher med GET. fra https://github.com/Kanin60/Hotel_Overlook/blob/main/src/hooks/useFetch.jsx
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