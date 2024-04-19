import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Stream from './components/Stream';
import Reservas from './components/Reservas';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/stream" element={<Stream/>}/>
          <Route path="/Reservas" element={<Reservas/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
// comentario
export default App;
