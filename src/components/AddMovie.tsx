import React, { useState, ReactElement } from 'react';
import { IMovie } from '../interfaces';
import '../css/AddMovie.css';

interface IAddMovieProps {
  onAddMovie: (movie: IMovie) => void;
}

export function AddMovie({ onAddMovie }: IAddMovieProps): ReactElement {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState<string>('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie: IMovie = {
      id: Date.now(),
      title,
      rating: rating ? Number(rating) : null,
      genre,
      description
    };

    console.log(newMovie);
    onAddMovie(newMovie);

    setTitle('');
    setRating('');
    setGenre('');
    setDescription('');
  };

  const handleClear = () => {
    setTitle('');
    setRating('');
    setGenre('');
    setDescription('');
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add Movie</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="range"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      >
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <div className="button-group">
      <button type="submit" className="add-button">Add</button>
      <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
}