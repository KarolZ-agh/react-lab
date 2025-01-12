import logo from './logo.svg';
import './App.css';

function App() {
  var currentTitle = "The Matrix (1999)"


  function onInputChanged(event) {
    console.log(event.target.value)
  }


  function addMovie(e) {
    console.log('clicked add')
  }


  return (
    <div className="App">
      <div className="App-header">
         <h1>My favorite movies</h1>
         <h2>Movie of a day: {currentTitle}</h2>
      </div>

      <div class="column column-30">
          <p>Movies</p>
          <ul id="movie-list"></ul>
          
      </div>

      <div class="column column-60 column-offset-5">
          <div class="single-input">
              <label>Title</label>
              <input type="text" id="title-inpt" onChange={onInputChanged}/> 
          </div>
          <div class="single-input">
              <label>Year</label>
              <input type="text" id="year-inpt"/> 
          </div>
          <div class="single-input">
              <label>Actors</label>
              <input type="text" id="actors-inpt"/> 
          </div>
          <button id="add-btn" onClick={addMovie}>Add</button>
      </div>
    </div>
  );
}

export default App;
