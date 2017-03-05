'use strict';
const reviewHandlebars = require('../templates/reviewHandlebars.handlebars');

const onSuccess = function (data) {
    //  debugger;
      if (data) {
        console.log(data);
      }
      let showResults = reviewHandlebars({ reviews: data.reviews});

      $('.review-results').empty().append(showResults);
      if (data.reviews.length === 0) {
        $('.message').text("no reviews");
      }
    };


const onError = function () {
  debugger
    $('.message').text('ERROR!');
};

const onDeleteSuccess = function () {
  $('.message').text('Your review was successfully deleted.');
};

const onPatchSuccess = function () {
  $('.message').text('Your review was successfully edited.');
};

const onCreateReview = function () {
  debugger
  $('.message').text('Your review was successfully created.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onCreateReview
};
