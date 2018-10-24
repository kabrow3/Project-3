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
import BlurbModal from "../../components/BlurbModal";


const Movie = props => (
  <div className="container">
    <div className="row">
      <div class="col-md-6 d-flex align-items-center">
        <button onClick={this.onOpenModal} className="btn btn-primary">Add Feed Back</button>
        <BlurbModal open={this.state.open} onCloseModal={this.onCloseModal} />
        <img src={`${props.poster}`} />
      </div>

      <div class="col-md-6">
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
  </div>
  );

  export default Movie;