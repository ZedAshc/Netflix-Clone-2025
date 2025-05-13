
import React, { useEffect, useState } from "react";
import "./singlerow.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
 import movieTrailer from "movie-trailer";

const SingleRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log("API Response:", request.data); // Shows the full object
        console.log("Movies:", request.data.results); // Specifically checks `results`
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    })();
  }, [fetchUrl]);



  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url); // Log the trailer URL
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams); // Log the URL parameters
          console.log(urlParams.get("v")); // Log the video ID
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.error("Error finding trailer:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>
    </div>
  );
};

export default SingleRow;

