import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
const SearchBox = styled.div`
  display: flex;
  width: 90%;
  height: 6vh;
  margin: 0 auto;
  border-radius: 7px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  width: 95%;
  height: 100%;
  background-color: white;
`;

const SearchButon = styled.button`
  width: 5%;
  height: 100%;
  color: white;
  background-color: white;
  background: #e50914;
`;

const SearchPage = () => {
  const search = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams({ query: search.current.value });
  };

  const query = searchParams.get("query");
  const encodedQuery = encodeURIComponent(query);

  const url = query
    ? `search/movie?query=${encodedQuery}&language=ko-KR&page=1`
    : null;

  const { data: movies, isLoading, isError } = useCustomFetch(url);

  console.log(movies);

  return (
    <SearchBox>
      <SearchInput
        placeholder="영화제목을 입력해주세요."
        ref={search}
        type="text"
      ></SearchInput>
      <SearchButon onClick={handleSearch}>검색</SearchButon>
    </SearchBox>
  );
};
export default SearchPage;
