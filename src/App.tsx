import { Home } from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieDetail } from "./components/pages/MovieDetail";
import { SearchResults } from "./components/pages/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/search" element={<SearchResults/>} />
    </Routes>
  );
}

export default App;
