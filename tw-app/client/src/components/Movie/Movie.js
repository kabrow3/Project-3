import React from "react";

const Movie = props => (
    <div className="movie">
      <figure className="movie--figure">
        <img src={`${props.poster}`} className="movie--poster" />
        <h2 className="movie--title">{props.title}</h2>
      </figure>
    </div>
  );

  export default Movie;