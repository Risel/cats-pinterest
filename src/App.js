import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Favourites from './pages/Favourites';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/favourites' element = {<Favourites/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
