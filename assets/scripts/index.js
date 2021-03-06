'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const auth = require('./auth/events');
const movies = require('./movies/events');
const reviews = require('./reviews/events');

$(() => {
  setAPIOrigin(location, config);

});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(()=> {
  auth.addHandlers();
  movies.addHandlers();
  reviews.addHandlers();
});
