import './App.css';
import Menubar from './components/Menubar';
import Genrebar from './components/Genrebar';
import NavBar from './components/NavBar';
import PosterCarousel from './components/PosterCarousel'


function App() {
  return (
    <div>
      <NavBar/>
      <Menubar/>
      <Genrebar/>
      <PosterCarousel/>
    </div>
  );
}

export default App;
