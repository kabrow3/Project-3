import React from "react";
import { Redirect, Link } from 'react-router-dom';
import "./Movies.css";
import { H4, H5 } from '../Headings'

const Movies = props => (

  <div className="col-12 col-xs-12 col-sm-6 col-md-3 col-lg-4 mb-4"
    key={props.imdbid}>
    <figure className="movie--figure">
      <Link to={"details/" + props.imdbid}>
        <img src={`${props.poster}`}
          className="movie--poster">
        </img>
      </Link>
      <p className="movie--title">
        {props.title}
      </p>
      <p className="movie--year">
        {props.year}
      </p>
    </figure>
  </div>

);

export default Movies;