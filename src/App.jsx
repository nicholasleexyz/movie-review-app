import { useEffect, useState } from 'react'
import './App.css'

const apikey = "c8b52503";
const baseUrl = "http://www.omdbapi.com/?"

const movies = await fetch('/movies.json').then(response => response.json())


// const currentMovieData = await getData();
function App() {
// i=tt4154796&apikey=c8b52503
  const [currentMovieIndex, setCurrentMovieIndex] = useState(1);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
      fetch(`${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`)
      .then(response => response.json())
      .then(data => setMovieData(data))
  }, [currentMovieIndex]);

  console.log(movieData);

  // console.log(currentMovieData);
  // const plot = currentMovieData.Plot;
  // const movieTitle = currentMovieData.Title;
  // console.log(plot);

  return (
    <>
      <h1 className='page-title'>Movie Reviews</h1>
      <div className="movies">
        <div className="box">
          {movies.Search.map((movie, i) => <img className='poster' key={i} src={movie.Poster} onClick={() => setCurrentMovieIndex(i)}></img>)}
        </div>
      </div>
      <div className="content">
        <div className="movie-info">
          <h2 style={{margin: '1rem 0'}}>{movieData.Title}</h2>
          <p>Synopsis: {movieData.Plot}</p>
        </div>
        <div className="movie-reviews">
          <h2 style={{margin: '1rem 0', textTransform: 'Uppercase'}}>Reviews</h2>
          <div className="movie-reviews-container">
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
            <div className="review"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
