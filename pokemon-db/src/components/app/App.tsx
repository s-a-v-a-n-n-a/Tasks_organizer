import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.scss';

import PokemonPage from "../pokemon-page/pokemon-page";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          {/*<Route path="/join" element={<JoinPageBody />} />*/}
          {/*<Route path="/about-us" element={<AboutUsPageBody />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
