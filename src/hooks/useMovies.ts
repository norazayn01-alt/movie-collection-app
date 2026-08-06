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
