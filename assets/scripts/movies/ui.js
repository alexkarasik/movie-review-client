'use strict';

const movieHandlebars = require('../templates/movieHandlebars.handlebars');
const store = require('../store.js');

const onSuccess = function (data) {

  if (data) {
    console.log(data);
  }
  let showMovies = movieHandlebars({ movies: data.movies});
  $('.movie-results').empty().append(showMovies);
  if (store.movies.length === 0) {
    $('.message').text("no movies");
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
    $('.message').text('Your movie was successfully deleted.');
};

const onUpdateMovie = function () {
      $('.message').text('Your movie was successfully edited.');
};

const onCreateMovie = function () {
    $('.message').text('Your movie was successfully created.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateMovie,
  onCreateMovie
};
