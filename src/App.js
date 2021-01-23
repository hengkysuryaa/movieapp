import './App.css';
import Summary from './components/Summary';
import Cast from './components/Cast';
import MovieDetail from './components/MovieDetail.js';

function App() {
  return (
    <div>
      <MovieDetail/>
      <Summary/>
      <Cast/>
    </div>
  );
}

export default App;
