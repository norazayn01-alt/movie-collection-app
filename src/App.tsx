import { useTrendingMovies } from "./hooks/useMovies";
import { MovieRow } from "./components/MovieRow";

function App() {
  const { data, isLoading, isError } = useTrendingMovies();

  if (isLoading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (isError) {
    return <p>Xatolik yuz berdi.</p>;
  }

  return <div>{data && <MovieRow title="Trending Now" movies={data} />}</div>;
}

export default App;
