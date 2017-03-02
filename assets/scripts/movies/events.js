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
  .then(ui.onSuccess)
  .catch(ui.onError);
  };

const onDeleteMovie = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroyMovies(data.movie.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchMovie= function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.editMovies(data.movie.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateMovie = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createMovies(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};
const addHandlers = () => {
  $('#show-movies').on('click', onGetMovies);
  $('#delete-movie').on('submit', onDeleteMovie);
  $('#create-movies').on('submit', onCreateMovie);
  $('#change-movie').on('submit', onPatchMovie);
};



module.exports = {
  onGetMovies,
  onDeleteMovie,
  onPatchMovie,
  onCreateMovie,
  addHandlers
};
