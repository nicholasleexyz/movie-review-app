import './App.css'

const movies = await fetch('/movies.json').then(response => response.json())
function App() {

  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, omnis mollitia blanditiis ad beatae magni rem, nemo vel accusamus voluptas maiores ipsa alias facilis deserunt. Blanditiis autem repellendus inventore fugiat?</p >
      <div className="movies">
        <div className="box">
          {movies.Search.map((movie, i) => <img className='poster' key={i} src={movie.Poster}></img>)}
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, omnis mollitia blanditiis ad beatae magni rem, nemo vel accusamus voluptas maiores ipsa alias facilis deserunt. Blanditiis autem repellendus inventore fugiat?</p >
    </>
  )
}

export default App
