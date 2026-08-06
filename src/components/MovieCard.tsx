import type { Movie } from "../types/movie";

export interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div style={{flexShrink: 0, width: 200}}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{width: '100%'}}
      />
      <h3>{movie.title}</h3>
    </div>
  );
}
