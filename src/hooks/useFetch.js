import axios from 'axios';
import { useState, useEffect } from 'react'
export const useFetch = (apiLink) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(apiLink)
            .then(resp => {
                setLoading(false)
                setData(resp.data)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return { data, loading, error }
}