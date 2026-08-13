import { useQuery } from "@tanstack/react-query";
import { tmdbApi } from "../api/tmdb";
import { type Movie } from "../types/movie";

export function useTrendingMovies() {
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["trending-movies"],
    queryFn: () =>
      tmdbApi.get("/trending/movie/week").then((res) => res.data.results),
  });
  return { data, isError, isLoading };
}

export function useNowPlayingMovies() {
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["now-playing-movies"],
    queryFn: () =>
      tmdbApi.get("/movie/now_playing").then((res) => res.data.results),
  });
  return { data, isLoading, isError };
}

export function useTopRatedMovies() {
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["top-rated-movies"],
    queryFn: () =>
      tmdbApi.get("/movie/top_rated").then((res) => res.data.results),
  });
  return { data, isLoading, isError };
}

export function useUpcomingMovies() {
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["upcoming-movies"],
    queryFn: () =>
      tmdbApi.get("/movie/upcoming").then((res) => res.data.results),
  });
  return { data, isLoading, isError };
}

export function useMovieDetail(id: string) {
  const { data, isLoading, isError } = useQuery<Movie>({
    queryKey: ["movie-detail", id],
    queryFn: () => tmdbApi.get(`/movie/${id}`).then((res) => res.data),
  });
  return { data, isLoading, isError };
}

export function useSearchMovies(query: string) {
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["search-movies", query],
    queryFn: () =>
      tmdbApi
        .get("/search/movie", { params: { query } })
        .then((res) => res.data.results),
  });
  return { data, isLoading, isError };
}

export function useMovieVideos(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => tmdbApi.get(`/movie/${id}/videos`).then((res) => res.data.results),
  });
  return { data, isLoading, isError };
}