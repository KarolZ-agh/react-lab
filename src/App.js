import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram"
import MovieForm from "./MovieForm";

function App() {
  const [movies, setMovies] = useState([
    { title: "LOTR"}, 
    { title: "Star Wars"}
  ]);
  // const [currentTitle, setTitle] = useState("The Matrix");
  // const [year, setYear] = useState("1999");
  // let msg = '';

  // if (year.length > 3 || year.length < 15 || currentTitle > 5 || currentTitle < 50) {
  //   msg = currentTitle + ' (' + year +')';
  // }

  // function onTitleChange(event) {
  //   setTitle(event.target.value);
  //   console.log(event.target.value);
  // }


  // function onYearChange(event) {
  //   let newValue = event.target.value;
  //   setYear(event.target.value);
  //   console.log(event.target.value);
  // }

 
  // let newMovie = {title: currentTitle};
  // setMovies([...movies, newMovie])


  return (
    <div className="App">
      <div className="App-header">
         <h1>My favorite movies</h1>
         {/* {msg.length > 10 && <h2>Movie of a day: {msg}</h2>} */}
      </div>

      <div class="column column-30">
          <h1>Movies</h1>
          <ul id="movie-list">
            {movies.map(movie => <li key= {movie.title}>{movie.title}<button>Delete</button></li>)}
          </ul>
          
      </div>
      <MovieForm onMovieSubmit={(movie) => setMovies([...movies,  {title: movie}])}/>
    
    </div>
  );
}

export default App;
