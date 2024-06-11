import Game from "./components/Game.jsx";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playgame" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
