import { IMovie } from '.';

import '../css/MovieCard.css';

interface IMovieCardProps {
  movie: IMovie;
  onDelete: (id: number) => void;
}

export function MovieCard({ movie, onDelete }: IMovieCardProps) {
  return (
    <div className="movie-card" onClick={() => onDelete(movie.id)}>
      <h3>{movie.title}</h3>
      <p>{movie.rating} / 5</p>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
}
