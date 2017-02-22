'use strict';

const api = require('./api.js');
const ui = require('./ui.js');


const getFormFields = require('../../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /s
// button is clicked
const onGetMovies = function (event) {
  event.preventDefault();
  api.showMovies()
  .then(function (response){
    $('.movie-results').empty();
    console.log(response);
      for (let i = 0; i < response.movies.length; i++){
        let movieTitle = `<div>Movie Title: ${response.movies[i].title}</div>`;
        let movieLength = `<div>Movie Length: ${response.movies[i].length}</div>`;
        let movieRating = `<div>Movie Rating: ${response.movies[i].rating}</div>`;
        let movieDescription = `<div>Movie Description: ${response.movies[i].description}</div>`;

        $('.movie-results').append(`<div>${movieTitle}${movieLength}${movieRating}${movieDescription}</div>`);
      }
  })
    .catch(ui.onError);
  };

const onDeleteMovie = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroyMovies(data.reviews.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchMovie= function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.patch(data.review.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateMovie = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};
const addHandlers = () => {
  $('#show-movies').on('click', onGetMovies);
  $('#delete-movies').on('click', onDeleteMovie);
  $('#create-movies').on('click', onCreateMovie);
  $('#change-movies').on('click', onPatchMovie);
};



module.exports = {
  onGetMovies,
  onDeleteMovie,
  onPatchMovie,
  onCreateMovie,
  addHandlers
};
