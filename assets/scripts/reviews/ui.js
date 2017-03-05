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
        $('.message').text("Sorry, but there aren't any Reviews in the database yet. Why don't you write one?");
      }
    };


const onError = function () {
    $('.message').text('ERROR!');
};

const onDeleteSuccess = function () {
  $('.message').text('Your review was successfully deleted.');
};

const onPatchSuccess = function () {
  $('.message').text('Your review was successfully edited.');
};

const onCreateReview = function () {
  $('.message').text('Your review was successfully added to the database.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onCreateReview
};
