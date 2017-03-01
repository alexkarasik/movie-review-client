'use strict';

const movieHandlebars = require('../templates/movieHandlebars.handlebars');

const onSuccess = function (data) {

  if (data) {
    console.log(data);
  }
  let showMovies = movieHandlebars({ movies: data.movies});
  $('.movie-results').empty().append(showMovies);
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Your movie was successfully deleted.');
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
