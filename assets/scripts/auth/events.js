'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
const store = require('../store');
//const engine = require('../new');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
 .then(ui.signUpSuccess)
 .catch(ui.failure);
};


const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store.user;
  })
 .then(ui.signInSuccess)
 .catch(ui.failure);
};


const onSignOut = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
 .then(ui.signOutSuccess)
 .catch(ui.failure);
};


const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(function (response) {
    $('.message').text("password changed");
    $('#change-password')[0].reset();
  })
 .then(ui.success)
 .catch(ui.failure);
};


// const onShowGames = function (event) {
//   event.preventDefault();
//   api.showGames()
//  .then(function (response) {
//     $('.message').text('Number of Played Games is ' + response.games.length);
//  })
//  .catch(ui.failure);
// };


// const onCreateGames = function (event) {
//   event.preventDefault();
//   api.createGames()
//     .then((response) => {
//       store.game = response.game;
//       return store.game;
//     })
//  .then(ui.createGameSuccess)
//  .catch(ui.failure);
//  //engine.resetGameBoard();
// };

const addHandlers = () => {
  $('#change-password').hide();
  $('.after-signin').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);

};
module.exports = {
  addHandlers,
};
