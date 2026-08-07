import { Home } from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieDetail } from "./components/pages/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
