/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import ReviewForm from "./components/ReviewForm";
import "./styles/App.css";
import Content from "./components/Content";
import MovieList from "./components/MovieList";

const apikey = "c8b52503";
const baseUrl = "http://www.omdbapi.com/?";

const movies = await fetch("/movies.json").then((response) => response.json());

// const currentMovieData = await getData();

// movie review dictionary - maps a movie (key) to an array of objects (reviews)
// review - user, comment, and a rating

// ReviewSubmissionForm
// ReviewList - represent the current reviews retrieved with html elements

function App() {
  // i=tt4154796&apikey=c8b52503
  const [currentMovieIndex, setCurrentMovieIndex] = useState(1);
  const [currentMovieData, setCurrentMovieData] = useState([]);
  // console.log(movies);

  useEffect(() => {
    // const controller = new AbortController();
    // fetch(`${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`, { signal: controller.signal })
    fetch(
      `${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`
    )
      .then((response) => response.json())
      .then((data) => setCurrentMovieData(data));

    // console.log("use Effect");

    // return () => {
    //   controller.abort();
    // }
  }, [currentMovieIndex]);

  // useEffect(() => {
  //   console.log(movieData);
  // }, [movieData]);

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
      {/* <ReviewForm
        title={movieData.Title}
        plot={movieData.Plot}
        currentMovieIndex={currentMovieIndex}
      /> */}
    </>
  );
}

export default App;
