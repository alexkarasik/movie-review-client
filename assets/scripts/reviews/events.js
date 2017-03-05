'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

const onGetReviews = function (event) {
  if (event.preventDefault) {
    event.preventDefault();
  }

  api.showReviews()
  .then((response) => {
     store.reviews = response.reviews;
     return store;
   })
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
  api.createReviews(data)
    // .then((response) => {fewfew
    //   store.review = response.review;
    //   return store.review;
    // })
    //.then(onGetReviews)
    .then(function(data) {
      onGetReviews(data);
    })
    .then(ui.onCreateReview)
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
