import React from "react";
import { Redirect, Link } from 'react-router-dom';
import "./Movies.css";
import { H4, H5 } from '../Headings'

const Movies = props => (
  
    <div className="col-sm-6 col-md-3 mb-4"
    key={props.imdbid}>
      <figure className="movie-figure">
        <Link to={"details/" + props.imdbid}>
        <img src={`${props.poster}`}
        className="movie-poster">
        </img>
        </Link>
        <H4 className="movie-title">
        {props.title}
        </H4>
        <H5 className="movie-year">
        {props.year}
        </H5>
      </figure>
    </div>

  );

  export default Movies;