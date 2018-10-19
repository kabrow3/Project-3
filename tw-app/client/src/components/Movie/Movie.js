import React from "react";
import { Redirect, Link } from 'react-router-dom';
import "./Movie.css"

const Movie = props => (
    <div className="movie">
      <figure className="movie-figure">
      <Link to="/details/:id">
        <img src=
        {`${props.poster}`} 
        className="movie-poster" />
        </Link>
        <h2 className="movie-title">
        {props.title}
        </h2>
      </figure>
    </div>
  );

  export default Movie;