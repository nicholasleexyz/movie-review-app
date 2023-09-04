/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles/App.css";
import Content from "./components/Content";
import MovieList from "./components/MovieList";

const apikey = "c8b52503";
const baseUrl = "http://www.omdbapi.com/?";

const movies = await fetch("/movies.json").then((response) => response.json());

function App() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(1);
  const [currentMovieData, setCurrentMovieData] = useState([]);

  useEffect(() => {
    fetch(
      `${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`
    )
      .then((response) => response.json())
      .then((data) => setCurrentMovieData(data));
  }, [currentMovieIndex]);

  return (
    <>
      <MovieList
        currentMovieIndex={currentMovieIndex}
        setCurrentMovieIndex={setCurrentMovieIndex}
        movies={movies}
      />
      <Content
        currentMovieData={currentMovieData}
        currentMovieIndex={currentMovieIndex}
        movies={movies}
      ></Content>
    </>
  );
}

export default App;
