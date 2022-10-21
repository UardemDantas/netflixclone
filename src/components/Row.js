import React, { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../api";

import './Row.css'

const imageHost = 'https://image.tmdb.org/t/p/original/';
function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data", data);
      setMovies(data?.results);
    } catch (e) {
      console.log("fetchMovies error", e);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img 
            key={movie.id} 
            className={`movie-card ${isLarge && "movie-card-large"}`}
            src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
            alt={movie.name}></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
