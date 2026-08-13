import { useSearchParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useSearchMovies } from "../../hooks/useMovies";
import { SimpleGrid } from "@mantine/core";
import { Loader } from "lucide-react";
import { MovieCard } from "../MovieCard";

export function SearchResults() {
  const [SearchParams] = useSearchParams();
  const query = SearchParams.get("query");
  const { data, isLoading, isError } = useSearchMovies(query);

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
    return <p>Film topilmadi...</p>;
  }
  return (
    <div style={{ paddingTop: 100, padding: "100px 20px 20px" }}>
      <Navbar />
      <h2 style={{ color: "white" }}>Natijalar: "{query}"</h2>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing="lg">
        {data &&
          data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
    </div>
  );
}
