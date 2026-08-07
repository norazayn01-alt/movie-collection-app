import type { Movie } from "../types/movie";
import { Button, Group } from "@mantine/core";
import { Navbar } from "./Navbar";

export interface HeroBannerProps {
  movie: Movie;
}

export function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
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
      <Navbar />
      <div style={{ position: "relative", padding: 20, color: "white" }}>
        <h1 style={{ margin: 0, fontSize: 48, fontWeight: 700 }}>
          {movie.title}
        </h1>
        <p style={{ margin: 0, fontSize: 18, fontWeight: 400 }}>
          {movie.overview}
        </p>
        <Group mt={20}>
          <Button variant="filled">Watch Now</Button>
          <Button variant="outline">Watch Trailer</Button>
        </Group>
      </div>
    </div>
  );
}
