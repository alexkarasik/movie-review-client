'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.review) {
    console.log(data.review);
  } else {
    console.table(data.reviews);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Your review was successfully deleted.');
};

const onPatchSuccess = function () {
  console.log('Your review was successfully edited.');
};

const onPostSuccess = function () {
  console.log('Your review was successfully created.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess
};
