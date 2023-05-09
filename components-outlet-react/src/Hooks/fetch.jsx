import { useEffect, useState } from "react";

 const useFetch = (url, key) => {
     const [apiData, setApiData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(url);
                    const json = await response.json();


                    setApiData(json[key]);
                    setLoading(false);  
               }catch (error) {
                    console.error(error);
                    setError(error);
                    setLoading(false);
               }
          };
          fetchData();
     },[url, key]);

     return { apiData, loading, error};
}

export default useFetch;