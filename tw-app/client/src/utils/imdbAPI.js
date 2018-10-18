import * as imdb from "imdb-api";


// Export an object containing methods we'll use for accessing the IMDB API

export default {
  getMovie: function(sq) {
    console.log(sq);
    return imdb.get({name: sq}, {apiKey: '8ff70e2d',});
  },
  getMoviebyID: function(sq) {
    return imdb.get({id: sq}, {apiKey: '8ff70e2d'});
  },
  searchMovie: function(sq) {
    return imdb.search({name: sq}, {apiKey: '8ff70e2d'});
  },
  getTV: function(sq) {
    return imdb.get({name: sq}, {apiKey: '8ff70e2d'}).then((things) => {
        return things.episodes()
    }).then((eps) => {
        console.log(eps);
    });  
  }
};

