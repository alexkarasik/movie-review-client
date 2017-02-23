'use strict';

const config = require('../config.js');
const store = require('../store.js');

const indexReviews = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const showReviews = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const destroyReviews = function(id){
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};


const editReviews = function(id, data){
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  });
};

const createReviews = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};


module.exports = {
  indexReviews,
  showReviews,
  destroyReviews,
  editReviews,
  createReviews
};
