import type { Movie } from "../types/movie";

export interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return <h3>{movie.title}</h3>;
}
