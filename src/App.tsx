import {
  useTrendingMovies,
  useNowPlayingMovies,
  useTopRatedMovies,
} from "./hooks/useMovies";
import { MovieRow } from "./components/MovieRow";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";

function App() {
  const { data, isLoading, isError } = useTrendingMovies();
  const {
    data: nowPlayingData,
    isLoading: isNowPlayingLoading,
    isError: isNowPlayingError,
  } = useNowPlayingMovies();
  const {
    data: topRatedData,
    isLoading: isTopRatedLoading,
    isError: isTopRatedError,
  } = useTopRatedMovies();
  if (isLoading || isNowPlayingLoading || isTopRatedLoading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (isError || isNowPlayingError || isTopRatedError) {
    return <p>Xatolik yuz berdi.</p>;
  }

  return (
    <div>
      <Navbar/>
      {data && <HeroBanner movie={data[5]} />}
      {data && <MovieRow title="Trending Now" movies={data} />}
      {nowPlayingData && (
        <MovieRow title="Latest Releases" movies={nowPlayingData} />
      )}
      {topRatedData && <MovieRow title="Top Rated" movies={topRatedData} />}
    </div>
  );
}

export default App;
