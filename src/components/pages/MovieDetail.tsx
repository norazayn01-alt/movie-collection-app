import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovies";
import { Button, Group } from "@mantine/core";
import { Navbar } from "../Navbar";
import { Loader, Star } from "lucide-react";

export function MovieDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetail(id);

  if (isLoading) {
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
  if (isError) {
    return <p>Film topilmadiyoooov...</p>;
  }
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.title}
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
          {data.title}
        </h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            margin: "8px 0",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Star size={18} color="orange" fill="orange" />
            {data.vote_average.toFixed(1)}
          </span>
          <span>{data.release_date}</span>
        </p>
        <p style={{ margin: 0, fontSize: 18, fontWeight: 400 }}>
          {data.overview}
        </p>
        <Group mt={20}>
          <Button variant="filled">Watch Now</Button>
          <Button variant="outline">Watch Trailer</Button>
        </Group>
      </div>
    </div>
  );
}
