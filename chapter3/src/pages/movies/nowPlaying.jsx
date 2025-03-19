import { useState } from "react";

const NowPlaying = () => {
  // 영화를 담을 state
  const [movies, setMovies] = useState([]);

  // useState로 데이터 불러오기

  return (
    <>
      <h1>NowPlaying Page</h1>
    </>
  );
};
export default NowPlaying;
