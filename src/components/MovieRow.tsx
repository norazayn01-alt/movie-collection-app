import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";

export interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div>
      <h2>{title}</h2>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
