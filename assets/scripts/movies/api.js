'use strict';

const config = require('../config.js');
const store = require('../store.js');


const indexMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const showMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const destroyMovies = function(id){
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};


const editMovies = function(id, data){
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

const createMovies = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  });
};


module.exports = {
  indexMovies,
  showMovies,
  destroyMovies,
  editMovies,
  createMovies
};
