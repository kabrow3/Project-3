import React from "react";

const Movie = props => (
    <div className="movie">
      <figure className="movie_figure">
        <img src={`${props.poster}`} className="movie_poster" />
        <h2 className="movie_title">{props.title}</h2>
      </figure>
    </div>
  );

  export default Movie;