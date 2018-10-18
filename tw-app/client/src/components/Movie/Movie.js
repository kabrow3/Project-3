import React from "react";

const Movie = props => (
    <div className="movie">
      <figure className="movie--figure">
        <img src={`${props.poster}`} className="movie--poster" />
        <h2 className="movi--title">{props.title}</h2>
        <p className="movie--summary">{props.plot}</p>
      </figure>
    </div>
  );

  export default Movie;