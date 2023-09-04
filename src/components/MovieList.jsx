import Movie from "./Movie";

/* eslint-disable react/prop-types */
export default function MovieList({
  currentMovieIndex,
  setCurrentMovieIndex,
  movies,
}) {
  return (
    <div className="movies">
      <div className="box">
        {/* function Movie({ isCurrent, poster, setCurrentMovieIndex, index }) { */}
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
