import {useState} from "react";


export default function MovieForm(props) {
const [currentTitle, setTitle] = useState('');
const [year, setYear] = useState('');


    function addMovie(event) {
        event.preventDefault();
        if (title.length < 5) {
            return alert('Tytuł jest za krótki');
        }
        props.onMovieSubmit({currentTitle, year});

        setTitle('');
        setYear('');

    }

    function handleAddMovie(event) {
        event.preventDefault();
        if (!isValid(currentTitle)) {
          alert("Incorrect value");
          return;
        }
        props.onMovieSubmit({title, year});
        console.log('add movie clicked')
    
        setTitle('');
        setYear('');
      }
    
      function isValid(value) {
        return !(value == '' || value == undefined || value.length < 3)
      }

    return <form onSubmit={handleAddMovie}>
        <h2>Add movie</h2>
        <div class="column column-60 column-offset-5">
          <div class="single-input">
              <label>Title</label>
              <input type="text" id="title-inpt" value={currentTitle} onChange={onTitleChange}/> 
          </div>
          <div class="single-input">
              <label>Year</label>
              <input type="text" id="year-inpt" value={year} onChange={onYearChange}/> 
          </div>
          <button id="add-btn">Add</button>
      </div>
    </form>;

}