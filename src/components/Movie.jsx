/* eslint-disable react/prop-types */

export default function Movie({ isCurrent, poster, setCurrentMovieIndex }) {
  return (
    <img
      className={`poster ${
        isCurrent ? "current-poster" : "not-current-poster"
      }`}
      src={poster}
      onClick={setCurrentMovieIndex} // callback to og setCurrentMovieIndex :P
    />
  );
}
