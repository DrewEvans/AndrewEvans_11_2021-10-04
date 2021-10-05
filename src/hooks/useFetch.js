import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState({ data: null, loading: false });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setResponse({ loading: true });
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse({ data: Object.values(json), loading: false });
      } catch (error) {
        setResponse({ loading: false });
        setError(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
};

export default useFetch;
