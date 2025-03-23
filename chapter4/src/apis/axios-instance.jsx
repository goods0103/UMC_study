import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_AUTH}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
});

export { axiosInstance };
