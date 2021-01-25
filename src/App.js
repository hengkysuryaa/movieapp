import './App.css';
import {Route, HashRouter} from "react-router-dom";
import ViewPage from './pages/ViewPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HashRouter>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/view" component={ViewPage}/>
      </HashRouter>
    </div>
  );
}

export default App;
