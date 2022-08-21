import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, SetData] = useState(null);
    const [isPending, setIsPendeing] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("we can not do it");
              }
    
              return res.json();
            })
            .then((data) => {
              SetData(data);
              setIsPendeing(false);
              setError(null);
            })
            .catch((err) => {
              setIsPendeing(false);
              setError(err.message);
            });
        }, 500);
      }, [url]);

      return {data,isPending,error}
}
export default useFetch;