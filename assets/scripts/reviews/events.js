'use strict';

const api = require('./api.js');
const ui = require('./ui.js');


const getFormFields = require('../../../lib/get-form-fields.js');
const store = require('../store');

const onGetReviews = function (event) {
  event.preventDefault();
  api.showreviews()
  .then(function (response){
    $('.review-entries').empty();
      for (let i = 0; i < response.reviews.length; i++){
        let movieId = `<div>Movie ID: ${response.reviews[i].movie_id}</div>`;
        let review_entry = `<div> Review: ${response.reviews[i].note}</div>`;
        $('.review-entries').append('<div>${movieId}${review_entry}</div>');
      }
  })
    .catch(ui.onError);
  };
  }

};

const onDeleteReview = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.destroyReviews(data.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchReview = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.editReviews(data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateReview = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createReviews(data)
    .then((response) => {
      store.review = response.review;
      return store.review;
    })
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('#show-reviews').on('click', onShowReview);
  $('#delete-review').on('click', onDeleteReview);
  $('#create-review').on('click', onCreateReview);
  $('#change-review').on('click', onPatchReview);
}


module.exports = {
  onGetReviews,
  onDeleteReview,
  onPatchReview,
  onCreateReview
};
