import { MapView } from './components/MapView';
import { Home } from './components/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>prueba Leaflet</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<MapView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
