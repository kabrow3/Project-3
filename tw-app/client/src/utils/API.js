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
    console.log(`api post blurb ${blurb}`)
    return axios.post("/api/route/blurb/", blurb);
  },
  // update a blurb in the db
  updateBlurb: function(blurb) {
    return axios.put("/api/route/movies", blurb);
  },
  // find blurbs attached to movies
  findBlurb: function(MovieImdbID) {
    console.log(`Here we are in API.js Line 23 ${MovieImdbID}`)
    return axios.get("/api/route/blurb/" + MovieImdbID)
    ;
  },
  // find all triggers in db
  findAllTriggers: function() {
    return axios.get("/api/route/triggers/");
  },
};
