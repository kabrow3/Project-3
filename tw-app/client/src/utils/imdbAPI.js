import * as imdb from "imdb-api";


// Export an object containing methods we'll use for accessing the IMDB API

export default {
  // Finds the top movie result for the given title
  getMovie: function(movie) {
    console.log(movie);
    return imdb.get({name: movie}, {apiKey: '8ff70e2d',});
  },
  // Finds the movie with the given id
  getMoviebyID: function(sq) {
    return imdb.get({id: sq}, {apiKey: '8ff70e2d'});
  },
  // Returns all movie and tv results for the search term
  searchMovie: function(sq) {
    return imdb.search({name: sq}, {apiKey: '8ff70e2d'});
  },
  // Returns the top tv result for the given title, as well as all the episodes
  getTV: function(show) {
    return imdb.get({name: show}, {apiKey: '8ff70e2d'}).then((things) => {
        return things.episodes()
    }).then((eps) => {
        console.log(eps);
    });  
  }
};

