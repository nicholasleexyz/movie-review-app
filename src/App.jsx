import './App.css'

const movies = await fetch('/movies.json').then(response => response.json())
function App() {

  return (
    <>
      <h1 className='page-title'>Movie Reviews</h1>
      <div className="movies">
        <div className="box">
          {movies.Search.map((movie, i) => <img className='poster' key={i} src={movie.Poster}></img>)}
        </div>
      </div>
      <div className="content">
        <button>asdf</button>
        <button>asdf</button>
        <button>asdf</button>
      </div>
    </>
  )
}

export default App
