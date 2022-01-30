// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import ListBeers from "./components/ListBeers.jsx";
import SingleBeer from "./components/SingleBeer.jsx";
import NewBeer from "./components/NewBeer.jsx";
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/beers" element={<ListBeers />}>
            <Route path=":beerId" element={<SingleBeer />} />
          </Route>
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
