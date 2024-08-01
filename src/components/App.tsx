import React, { useState } from 'react';
import { AddMovie, MovieCard, MovieList } from '.';
import { IMovie } from './IMovie';
import '../css/App.css';

export function App() {
  return (
    <>
      <AddMovie />
      <MovieCard />
      <MovieList />
    </>
  );
}
