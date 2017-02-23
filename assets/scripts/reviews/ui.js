'use strict';

const onSuccess = function (data) {
 debugger;
  if (data.review) {
    console.log(data.review);
    $('.message').text('SUCCESS!');
  } else {
    console.table(data.reviews);
  }
};

const onError = function (response) {
    $('.message').text('ERROR!');
};

const onDeleteSuccess = function () {
  $('.message').text('Your review was successfully deleted.');
};

const onPatchSuccess = function () {
  $('.message').text('Your review was successfully edited.');
};

const onPostSuccess = function () {
  $('.message').text('Your review was successfully created.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess
};
