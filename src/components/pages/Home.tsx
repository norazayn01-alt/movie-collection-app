import {
  useNowPlayingMovies,
  useTopRatedMovies,
  useTrendingMovies,
  useUpcomingMovies,
} from "../../hooks/useMovies";
import { HeroBanner } from "../HeroBanner";
import { MovieRow } from "../MovieRow";
import { Navbar } from "../Navbar";
import { Loader } from "lucide-react";

export function Home() {
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
  const {
    data: upcomingMoviesData,
    isLoading: isUpcomingMoviesLoading,
    isError: isUpcomingMoviesError,
  } = useUpcomingMovies();
  if (
    isLoading ||
    isNowPlayingLoading ||
    isTopRatedLoading ||
    isUpcomingMoviesLoading
  ) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader color="white" size={48} className="spin" />
      </div>
    );
  }

  if (
    isError ||
    isNowPlayingError ||
    isTopRatedError ||
    isUpcomingMoviesError
  ) {
    return <p>Xatolik yuz berdi.</p>;
  }
  return (
    <div>
      <Navbar />
      {data && <HeroBanner movie={data[1]} />}
      {data && <MovieRow title="Trending Now" movies={data} />}
      {nowPlayingData && (
        <MovieRow title="Latest Releases" movies={nowPlayingData} />
      )}
      {topRatedData && <MovieRow title="Top Rated" movies={topRatedData} />}
      {upcomingMoviesData && (
        <MovieRow title="Exclusive Shows" movies={upcomingMoviesData} />
      )}
    </div>
  );
}
