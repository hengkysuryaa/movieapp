import './App.css';
import Summary from './components/Summary';
import Cast from './components/Cast';
import MovieDetail from './components/MovieDetail.js';
import GenreButton from './components/GenreButton.js';

function App() {
  return (
    <div>
      <MovieDetail/>
      <GenreButton/>
      <Summary/>
      <Cast/>
    </div>
  );
}

export default App;
