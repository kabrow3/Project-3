import React from "react";

const Movies = props => (
    <ul className="movies">
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );

  export default Movies;