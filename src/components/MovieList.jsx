/* eslint-disable react/prop-types */
import Movie from "./Movie";

export default function MovieList({
  currentMovieIndex,
  setCurrentMovieIndex,
  movies,
}) {
  return (
    <div className="movies">
      <div className="box">
        {movies.Search.map((movie, i) => (
          <Movie
            key={i}
            isCurrent={i === currentMovieIndex}
            poster={movie.Poster}
            setCurrentMovieIndex={() => setCurrentMovieIndex(i)}
          ></Movie>
        ))}
      </div>
    </div>
  );
}
