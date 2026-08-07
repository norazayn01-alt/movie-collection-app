import {
  useTrendingMovies,
  useNowPlayingMovies,
  useTopRatedMovies,
  useUpcomingMovies,
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
  const {data: upcomingMoviesData, isLoading: isUpcomingMoviesLoading, isError: isUpcomingMoviesError} = useUpcomingMovies()
  if (isLoading || isNowPlayingLoading || isTopRatedLoading || isUpcomingMoviesLoading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (isError || isNowPlayingError || isTopRatedError || isUpcomingMoviesError) {
    return <p>Xatolik yuz berdi.</p>;
  }

  return (
    <div>
      <Navbar/>
      {data && <HeroBanner movie={data[1]} />}
      {data && <MovieRow title="Trending Now" movies={data} />}
      {nowPlayingData && (
        <MovieRow title="Latest Releases" movies={nowPlayingData} />
      )}
      {topRatedData && <MovieRow title="Top Rated" movies={topRatedData} />}
      {upcomingMoviesData && <MovieRow title="Exclusive Shows" movies={upcomingMoviesData}/>}
    </div>
  );
}

export default App;
