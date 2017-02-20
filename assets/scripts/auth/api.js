'use strict';
const config = require('../config');
const store = require('../store');


const signUp = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data,
  });
};
const signIn = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};


const signOut = function() {
  return $.ajax({
    url: `${config.apiOrigin}/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const searchReviews = function() {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const createReview = function() {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'POST',
    data,
  });
};

const updateReview = function(ID, data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + ID,
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'PATCH',
    data
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  searchReviews,
  createReview,
  updateReview
};
