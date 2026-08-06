import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { Group, ScrollArea } from "@mantine/core";

export interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ScrollArea>
        <Group wrap="nowrap" align="flex-start">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Group>
      </ScrollArea>
    </div>
  );
}
