import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovies";

export function MovieDetail() {
    const { id } = useParams();
    const { data, isLoading, isError } = useMovieDetail(id);

    if (isLoading) {
        return <p>Yuklanmoqda...</p>
    }
    if (isError) {
        return <p>Film topilmadi...</p>
    }
    return (
        <div>
            {data && <h1>{data.title}</h1>}
        </div>
    )
}