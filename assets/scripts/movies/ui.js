'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.movies) {
    console.log(data.movies);
  } else {
    console.table(data.movies);
  }
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
