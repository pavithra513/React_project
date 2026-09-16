import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Occasion from "./Pages/Occasion";
import Recommendations from "./Pages/Recommendations";
import Favorites from "./Pages/Favorites";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/occasion" element={<Occasion />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;