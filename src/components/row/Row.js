import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { getMovies } from "../../api";

import "./Row.css";

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);
  
  const[trailerUrl,setTrailerUrl]=useState('')

  const handleOnClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    } else {
      movieTrailer(movie.title ||movie.original_name|| movie.name ||'')
      .then((url) =>{
        setTrailerUrl(url)
      })
      .catch((e) => {
        console.log('Error movie trailer', e);
      });
    }
  };

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
              onClick={() => handleOnClick(movie)}
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
     {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>
  );
}

export default Row;
