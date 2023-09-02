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
  // console.log(movies);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`, { signal: controller.signal })
      .then(response => response.json())
      .then(data => setMovieData(data))

    // console.log('use Effect');

    return () => {
      controller.abort();
    }
  }, [currentMovieIndex]);

  useEffect(() => {
    console.log(movieData);
  }, [movieData])

  // console.log(currentMovieData);
  // const plot = currentMovieData.Plot;
  // const movieTitle = currentMovieData.Title;
  // console.log(plot);

  return (
    <>
      {/* <h1 className='page-title'>Movie Reviews</h1> */}
      <div className="movies">
        <div className="box">
          {movies.Search.map((movie, i) => <img key={i} className={`poster ${i === currentMovieIndex ? 'current-poster' : 'not-current-poster'}`} src={movie.Poster} onClick={() => setCurrentMovieIndex(i)} />)}
        </div>
      </div>

      <div className="content">
        <div className="info-content">
          <div className="movie-info">
            <h2>{movieData.Title}</h2>
            <p>{movieData.Plot}</p>
          </div>
        </div>

        <div className="reviews-content">
          <div className="movie-reviews-container">
            <div className="movie-reviews">
              <h1 style={{ margin: '1rem 0' }}>{movieData.Title} (Reviews)</h1>
              <div className="review">
                {/* star rating */}
                {[...Array(5).keys()].map(i => <img key={i} src='/public/star-solid.svg' className='star' />)}
              </div>
              <div className="review"></div>
              <div className="review"></div>
              <div className="review"></div>
              <div className="review"></div>
              <div className="review"></div>
              <div className="review"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
