import React, { useEffect, useState } from "react";
import categories, { getMovies } from "../api";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = await data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex]);
      console.log("oie", movies[randomIndex]);
    } catch (e) {
      console.log("Banner error", e);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="banner-content">
        <div className="banner-title">
          <div className="banner-button"></div>
          <div className="banner-description"></div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
