import React from "react";
import "./Movie.css";


const Movie = props => (
  <div className='row'>
    <div className="movie--content">
      <div className="row">
        <h1 className="movie--title">{props.title} <span id="year">({props.year})</span></h1>
      </div>
      {/* <div className="row">
        <p className="movie--triggers"><strong>Known Triggers: </strong></p>
      </div> */}

      <div class="row trigger-wrap">
        <div class="movie--trigger">trigger tag</div>   <div class="movie--trigger">trigger tag</div>
      </div>
      <br />
      <div className="row">
        <span id="rated">{props.rated}&nbsp;&nbsp;|&nbsp;&nbsp; </span>
        <span id="runtime">{props.runtime}&nbsp;&nbsp;|&nbsp;&nbsp; </span>
        <span id="genres">{props.genres}</span>
      </div>
     <br/>
      <div className="row">
        <p className="block"><em>Director:</em> <span id="director">{props.director}</span></p>
      </div>
      <div className="row">
        <p className="block"><em>Writer:</em> <span id="writer">{props.writer}</span></p>
      </div>
      <div className="row">
        <p className="block"><em>Cast:</em> <span id="actors">{props.actors}</span></p>
      </div>
      <br />
      <div className="row">
        <p id="plot">{props.plot}</p>
      </div>
    </div>
  </div>
);

export default Movie;