import { useState } from "react";
import { MOVIES } from "../mocks/movies";

const Movies = () => {
  let [over, setOver] = useState(0);
  return (
    <div className="container">
      {MOVIES.results.map((movie) => (
        <div className="movieForm " key={movie.id}>
          <img
            onMouseOver={() => {
              setOver(over + 1);
            }}
            className="movieStyle"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          ></img>
        </div>
      ))}
    </div>
  );
};
export default Movies;
