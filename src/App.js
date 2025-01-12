import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram"

function App() {
  const [movies, setMovies] = useState([
    { title: "LOTR"}, 
    { title: "Star Wars"}
  ]);
  const [currentTitle, setTitle] = useState("The Matrix");
  const [year, setYear] = useState("1999");
  let msg = '';

  if (year.length > 3 || year.length < 15 || currentTitle > 5 || currentTitle < 50) {
    msg = currentTitle + ' (' + year +')';
  }

  function onTitleChange(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }


  function onYearChange(event) {
    let newValue = event.target.value;
    if (newValue.length >= 4) {
      setYear(event.target.value);
      console.log(event.target.value);
    }
  }

  function addMovie(event) {
    let newMovie = {title: currentTitle};
    setMovies([...movies, newMovie])
    console.log('movie added')
  }

  return (
    <div className="App">
      <div className="App-header">
         <h1>My favorite movies</h1>
         {msg.length > 10 && <h2>Movie of a day: {msg}</h2>}
      </div>

      <div class="column column-30">
          <h1>Movies</h1>
          <ul id="movie-list">
            {movies.map(movie => <li key= {movie.title}>{movie.title}</li>)}
          </ul>
          
      </div>

      <div class="column column-60 column-offset-5">
          <div class="single-input">
              <label>Title</label>
              <input type="text" id="title-inpt" value={currentTitle} onChange={onTitleChange}/> 
          </div>
          <div class="single-input">
              <label>Year</label>
              <input type="text" id="year-inpt" value={year} onChange={onYearChange}/> 
          </div>
          <button id="add-btn" onClick={addMovie}>Add</button>
      </div>
    </div>
  );
}

export default App;
