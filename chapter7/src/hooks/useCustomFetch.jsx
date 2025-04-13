import { useState, useEffect } from "react";
import { axiosInstance } from "../apis/axios-instance";
import { useQuery } from "@tanstack/react-query";

// const useCustomFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axiosInstance.get(url);
//         setData(response);
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, isLoading, isError };
// };

const fetchData = async (url) => {
  const res = await axiosInstance.get(url);
  return res;
};

const useCustomFetch = (url, key) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(url),
    enabled: !!url,
  });
};

export default useCustomFetch;
