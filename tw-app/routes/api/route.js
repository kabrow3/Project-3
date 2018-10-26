// something should go here
const router = require("express").Router();
const controller = require("../../controllers/controller");

// how do we want to name them?

// post route for inserting into our movie database
router.route("/movie/:title/:imdbID")
    .post(controller.insertMovie);

// put route for updating the blurb on the movie table

// router.route("/movie/:BlurbId")
//     .put(controller.updateMovieBlurb);

// get route for seraching for a movie in our database by title
router.route("/movie/:title")
    .get(controller.findMovie);

// post route for creating a blurb in our database
router.route("/blurb")
    .post(controller.insertBlurb);

// updating a blurb in our database
router.route("/blurb")
    .put(controller.updateBlurb);

// find all blurbs with attached to a movie
router.route("/blurb/:imdbID")
    .get(controller.findBlurb);

router.route("/triggers")
    .get(controller.findAllTriggers);

module.exports = router;
