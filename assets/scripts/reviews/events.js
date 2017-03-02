'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const getFormFields = require('../../../lib/get-form-fields.js');
const store = require('../store');

const onGetReviews = function (event) {
  event.preventDefault();
  api.showReviews()
  .then(ui.onSuccess)
  .catch(ui.onError);
};

const onDeleteReview = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.destroyReviews(data.review.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchReview = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editReviews(data.review.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateReview = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  // console.log(data);
  api.createReviews(data)
    // .then((response) => {
    //   store.review = response.review;
    //   return store.review;
    // })
    .then(onGetReviews)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('#show-reviews').on('click', onGetReviews);
  $('#delete-review').on('submit', onDeleteReview);
  $('#create-review').on('submit', onCreateReview);
  $('#change-review').on('submit', onPatchReview);
};


module.exports = {
  onGetReviews,
  onDeleteReview,
  onPatchReview,
  onCreateReview,
  addHandlers
};
