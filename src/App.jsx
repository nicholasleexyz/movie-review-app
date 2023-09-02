import { useEffect, useState } from 'react'
import './App.css'

const apikey = "c8b52503";
const baseUrl = "http://www.omdbapi.com/?"

const movies = await fetch('/movies.json').then(response => response.json())

// const currentMovieData = await getData();

function Stars(){
  const [rating, setRating] = useState(0);

  const starRange = [...Array(5).keys()];

  return (
    <div className="stars">
      {starRange.map(i => <img key={i} src={i < rating ? '/star-solid.svg' : '/star-regular.svg'} className='star' onClick={() => setRating(i + 1)}/>)}
    </div>
  )
}

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
            {/* Going to developer hell for this. :P */}
            <div className="asdf">
              <div className="average-rating">
                <span>Average Rating: </span><Stars/>
              </div>
              <div style={{margin: '0 1rem 0 1rem'}}className="">
                <h2 style={{margin: '1rem auto 0.5rem auto'}} className='movie-info-title'>{movieData.Title}</h2>
                <p style={{maxWidth: "80ch"}}>{movieData.Plot}</p>
              </div>
              <div className="line-decor"></div>
              <div className="review-submission-form">
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, perspiciatis minima dolorum ut velit veritatis doloribus voluptatum sit dolore odio saepe fugiat! Adipisci doloremque ad ducimus praesentium saepe perspiciatis pariatur!</p> */}
                <div style={{display: "flex", height:"100%", width:"100%", justifyContent: "center", alignContent: "center", flexFlow: "column"}} className="">
                  <h2>Review of <strong>{movieData.Title}</strong></h2>
                  <div style={{width : "100%", margin : "0.5rem 0"}} className="line-decor"></div>
                  <div className="">
                    <label style={{margin:"0 1rem 0 0"}} htmlFor="">Reviewer Name</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div style={{display: "flex", backgroundColor: ""}} className="">
                    <label style={{margin: "auto 1rem auto 0"}} htmlFor="">Star Rating </label>
                    <Stars/>
                  </div>
                  <div style={{display: "flex", alignItems: "start"}}className="">
                    <label style={{margin:"0 1rem auto 0"}}htmlFor="">Comments</label>
                    <textarea name="" id="" ></textarea>
                  </div>
                  {/* <textarea name="" id="" ></textarea> */}
                  <div style={{width : "100%", margin : "0.5rem 0"}} className="line-decor">

                  </div>
                  <div style={{alignSelf:"end", margin: "auto 0 0 0", height: "fit-content",width: "fit-content"}}className="">
                    <button >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-content">
          <div className="movie-reviews-container">
            <div className="movie-reviews">
              <h1 style={{ margin: '1rem 0' }}>{movieData.Title} (Reviews)</h1>
              <div className="review">
                {/* star rating */}
                <Stars/>
                {/* <div className="star"></div> */}
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
