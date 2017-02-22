'use strict';

const config = require('../config.js');

const indexMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=${store.user.token}'
    },
  });
};

const showMovies = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=${store.user.token}'
    },
  });
};

const destroyMovies = function(id){
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=${store.user.token}'
    },
  });
};


const editMovies = function(id, data){
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=${store.user.token}'
    },
    data,
  });
};

const createMovies = function(formData) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=${store.user.token}'
    },
    data: formData,
  });
};


module.exports = {
  indexMovies,
  showMovies,
  destroyMovies,
  editMovies,
  createMovies
};
