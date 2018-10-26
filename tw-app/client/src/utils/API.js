import axios from "axios";

export default {
  // insert movie with imdbID and BlurbID
  insertMovie: function(title, imdbID) {
    return axios.post("/api/route/movie/" + title + "/" + imdbID);
  },
  // find movies with title in db
  findMovie: function(title) {
    return axios.get("/api/route/movie/" + title);
  },
  // post anew blurb
  insertBlurb: function(blurb) {
    return axios.post("/api/route/blurb", blurb);
  },
  // update a blurb in the db
  updateBlurb: function(blurb) {
    return axios.put("/api/movies", blurb);
  },
  // find blurbs attached to movies
  findBlurb: function(imdbID) {
    return axios.get("api/blurb/" + imdbID)
    ;
  },
  // find all triggers in db
  findAllTriggers: function() {
    return axios.get("/api/route/triggers/");
  },
};
