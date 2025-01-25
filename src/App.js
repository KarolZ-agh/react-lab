import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MovieList from "./MoviesList"
import { MovieItem } from './MoviesList';

function App() {
    const [movies, setMovies] = useState([]);


 

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            {/* <MovieItem movie={title: "Matrix", year: "1999"} /> */}
            <MovieList movies={movies}/>
            
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
        </div>
    );
}

export default App;
