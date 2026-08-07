import type { Movie } from "../types/movie";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div style={{ flexShrink: 0, width: 200 }}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%" }}
        />
        <h3>{movie.title}</h3>
        <p style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Star size={16} color="orange" fill="orange" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}
