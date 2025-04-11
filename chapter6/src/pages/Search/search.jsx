import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useEffect, useRef, useState } from "react";
import * as S from "./search.style.js";
import { useNavigate } from "react-router-dom";
import SearchMovieList from "../Movie/search-movie-list.jsx";

const SearchPage = () => {
  // const [searchValue, setSearchValue] = useState("");
  const searchValue = useRef("");

  const navigate = useNavigate();

  // const onChangeSearchValue = (e) => {
  //   setSearchValue(searchValue.current.value);
  // };

  const handleSearchMovie = () => {
    navigate(`/search?mq=${searchValue.current.value}`);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <S.SearchWrapper>
      <S.SearchContainer>
        <input
          placeholder="영화 제목을 입력해주세요 ..."
          // value={searchValue}
          ref={searchValue}
          // onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <S.MovieGridContainer>
        <SearchMovieList />
      </S.MovieGridContainer>
    </S.SearchWrapper>
  );
};
export default SearchPage;
