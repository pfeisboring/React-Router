import React from "react";
import MovieCard from "./movieCard";

const MoviesList = ({ movies, search }) => {
  return (
    <div className="list">
      {movies
        .filter((movie) => movie.name.toLowerCase().includes(search))
        .map((movies, i) => (
          <MovieCard key={i} movies={movies} />
        ))}
    </div>
  );
};

export default MoviesList;
