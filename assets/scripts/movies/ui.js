'use strict';

const movieHandlebars = require('../templates/movieHandlebars.handlebars');
const store = require('../store.js');

const onSuccess = function (data) {

  if (data) {
    console.log(data);
  }
  let showMovies = movieHandlebars({ movies: data.movies});
  $('.movie-results').empty().append(showMovies);
  if (data.movies.length === 0) {
    $('.message').text("Sorry, but there are no movies in the database yet. Why don't you add some for others to see?");
  }
};


const onError = function (response) {
//  debugger
  console.error(response);
};

const onDeleteSuccess = function () {
    $('.message').text('Your movie was successfully deleted.');
};

const onUpdateMovie = function () {
      $('.message').text('Your movie was successfully edited.');
};

const onCreateMovie = function () {
  //debugger;
    $('.message').text('Your movie was successfully added to the database!');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateMovie,
  onCreateMovie
};
