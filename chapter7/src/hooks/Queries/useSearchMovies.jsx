import { axiosInstance } from "../../apis/axios-instance";

const useSearchMovies = async ({ mq, pageParam }) => {
  const res = await axiosInstance.get(
    `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=${pageParam}`
  );
  return res;
};

export { useSearchMovies };
