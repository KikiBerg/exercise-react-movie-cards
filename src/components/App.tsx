import { useState, ReactElement } from 'react';
import { AddMovie, MovieList } from '.';
import { IMovie } from '.';
import '../css/App.css';

export function App(): ReactElement {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleAddMovie = (movie: IMovie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleDeleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className='App'>
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDelete={handleDeleteMovie} />
    </div>
  );
}
