import React from "react";
import { Redirect, Link } from 'react-router-dom';
import "./Movies.css";
import { H2, H3, H4 } from '../Headings'

const Movies = props => (
  
    <div className="col-sm-6 col-md-3 mb-4">
      <figure className="movie-figure">
        <img src={`${props.poster}`}
        className="movie-poster" 
        onClick={() => props.handleClick(props.imdbid)}>
        </img>
        <H2 className="movie-title">
        {props.title}
        </H2>
        <H4 className="movie-year">
        {props.year}
        </H4>
      </figure>
    </div>

  );

  export default Movies;