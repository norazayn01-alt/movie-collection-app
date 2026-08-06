import type { Movie } from "../types/movie";

export interface HeroBannerProps {
  movie: Movie;
}

export function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <div style={{ position: "relative", minHeight: "70vh"}}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        }}
      ></div>
      <div style={{ position: "relative", padding: 20, color: 'white'}}>
        <h1 style={{ margin: 0 , fontSize: 48 , fontWeight: 700}}>{movie.title}</h1>
        <p style={{ margin: 0 , fontSize: 18, fontWeight: 400}}>{movie.overview}</p>
      </div>
    </div>
  );
}
