import React, { useState, ReactElement } from 'react';
import { IMovie } from '.';

import '../css/AddMovie.css';

interface IAddMovieProps {
  onAddMovie: (movie: IMovie) => void;
}

export function AddMovie({ onAddMovie }: IAddMovieProps): ReactElement {
    // Variables to manage form inputs
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState<string>('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
  
    // Event handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // Prevents the default form submission behavior
  
      // New movie object with the current state values
      const newMovie: IMovie = {
        id: Date.now(), 
        title,
        rating: rating ? Number(rating) : null,
        genre,
        description
      };

      console.log(newMovie);
  
      // Call onAddMovie callback with the new movie object
      onAddMovie(newMovie);
  
      // Reset form inputs to initial state
      setTitle('');
      setRating('');
      setGenre('');
      setDescription('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Input field for the movie title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
  
        {/* Range input for the movie rating */}
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
  
        {/* Dropdown select for the movie genre */}
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
  
        {/* Textarea for the movie description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
  
        {/* Submit button to add the movie */}
        <button type="submit">Add</button>
      </form>
    );
  }