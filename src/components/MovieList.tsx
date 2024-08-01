import { IMovie } from '.';
import { MovieCard } from './MovieCard';


import '../css/MovieList.css';


interface IMovieListProps {
  movies: IMovie[];
  onDelete: (id: number) => void;
}


export function MovieList({ movies, onDelete }: IMovieListProps) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}
