import React from "react";
import { Redirect, Link } from 'react-router-dom';
import "./Movie.css"

const Movie = props => (
    <div className="movie">
      <figure className="movie-figure">
      <Link to="/details/:id">
        <img src=
        // {`${props.poster}`} 
        "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
        className="movie-poster" />
        </Link>
        <h2 className="movie-title">
        {props.title}
        Batman
        </h2>
      </figure>
    </div>
  );

  export default Movie;