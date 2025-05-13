import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';    
import '../Banner/banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error ", error);
      }
    })();
  }, []);
  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  // The truncate function is used to limit the length of a string to a specified number of characters (n).

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button> 
           <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
};

export default Banner;


