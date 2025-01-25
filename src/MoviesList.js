
  
  
  export default function MoviesList(props) {

    return (
        <div>
            <h2>Titles</h2>
            <ul>
                {props.movies.map(movie => <MovieItem movie={movie}/>)}
            </ul>
        </div>
    )
  }


  export function MovieItem(props) {
    return (
        <li key={props.movie.title}>{props.movie.title} ({props.movie.year})</li>
    )
  }