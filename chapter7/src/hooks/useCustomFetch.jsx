import { useState, useEffect } from "react";
import { axiosInstance } from "../apis/axios-instance";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

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

const fetchData = async (url, pageParam = 1) => {
  const res = await axiosInstance.get(`${url}&page=${pageParam}`);
  return res;
};

const useCustomFetch = (url, key, options = {}) => {
  const { isInfinite = false } = options;

  if (isInfinite) {
    return useInfiniteQuery({
      queryKey: [key],
      queryFn: ({ pageParam = 1 }) => fetchData(url, pageParam),
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1; //로드된 페이지수 + 1
        return nextPage <= lastPage.data.total_pages ? nextPage : undefined;
      },
      ...options,
    });
  }
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(url),
    enabled: !!url,
    ...options,
  });
};

export default useCustomFetch;
