// import React from "react";
// import { Redirect, Link } from 'react-router-dom';
// import "./Movie.css"

// const Movie = props => (
//     <div className="movie">
//       <figure className="movie-figure">
//       <Link to="/details/:id">
//         <img src={`${props.poster}`}className="movie-poster" />
//       </Link>
//         <h2 className="movie-title">
//         {props.title}
//         </h2>
//       </figure>
//     </div>
//   );

//   export default Movie;
import React from "react";
import "./Movie.css";


const Movie = props => (
  <div className='row'>
    <div className="col-md-6">
      <div className="movie-poster">
        <img src={props.poster}></img>
      </div>
    </div>
    <div className="col-md-6">
      <div className="movie-content">
        <div className="row">
          <h1 className="title">{props.title}<span id="year">{props.year}</span></h1>
        </div>
      <div className="row">
          <span id="rated">{props.rated}</span> | 
          <span id="runtime">{props.runtime}</span> | 
          <span id="genres">{props.genre}</span>
      </div>
      <br />
      <div className="row">
          <h4>Director <span id="director">{props.director}</span></h4>
          <br />
          <h4>Writer <span id="writer">{props.writer}</span></h4>
          <br />
          <h4>Cast <span id="actors">{props.actors}</span></h4>
      </div>
      <br />
      <div className="row">
          <p id="plot">{props.plot}</p>
      </div>
      </div>
    </div>
  </div>
  );

  export default Movie;