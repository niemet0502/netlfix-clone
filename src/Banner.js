import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Request";
import "./Banner.css";
import logo from "./img/logo2.png"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetfixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * Math.floor(19))]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "bottom bottom",
        backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 style={{display: 'flex', alignItems: 'center'}}> 
          <img src={logo} style={{width: '25px'}} /> 
          <span style={{color: '#e5e5e5', fontSize: '14px'}}>SERIES</span>
        </h1>
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button 
            className="banner__button active"
            style={{display: 'flex', alignItems: 'center'}}
          >
            <PlayArrowIcon />
            <span  style={{marginLeft: '10px'}} >Play</span>
          </button>
          <button className="banner__button">My List</button>
        </div>
        
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
