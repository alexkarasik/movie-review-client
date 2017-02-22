'use strict';

const api = require('./api.js');
const ui = require('./ui.js');


const getFormFields = require('../../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /s
// button is clicked
const onGetReviews = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.review.id.length === 0){
      api.index()
        .then(ui.onSuccess)
        .catch(ui.onError);
  } else {
    api.show(data.review.id)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

const onDeleteReview = function(event){
  event.preventDefault();
  // let Id = $('#delete--id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  api.destroy(data..id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchReview = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.patch(data.review.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onCreateReview = function(event){
  event.preventDefault();

  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};


module.exports = {
  onGetReview,
  onDeleteBook,
  onPatchBook,
  onCreateBook
};
