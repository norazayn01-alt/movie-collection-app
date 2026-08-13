import { useSearchParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useSearchMovies } from "../../hooks/useMovies";
import { MovieRow } from "../MovieRow";
import { Loader } from "lucide-react";

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
    <div>
      <Navbar />
      {data && <MovieRow title={`Natijalar: "${query}"`} movies={data} />}
    </div>
  );
}
