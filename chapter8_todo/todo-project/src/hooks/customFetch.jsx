import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const CustomFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(url);
        setData(res);
      } catch (err) {
        console.log(err.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, isError, data };
};

export { CustomFetch };
