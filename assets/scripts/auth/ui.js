'use strict';

const success = () => {
  $('.message').text('SUCCESS!');
};

const failure = () => {
  $('.message').text('ERROR!');
};

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('#sign-up')[0].reset();
  $('.message').text('Successful Sign Up!');
};

const changePasswordSuccess = function () {
  $('.message').text('Password Changed!');
};


const signInSuccess = () => {
   $('#sign-up').val('');
   $('#sign-up').hide();
   $('#sign-in').hide();
   $('#change-password').show();
   $('.after-signin').show();
   $('.message').text('Success!');
   $('#sign-in')[0].reset();
};
const signOutSuccess = () => {
  $('.after-signin').hide();
  $('#change-password').hide();
  $('#headingOne').show();
  $('#headingTwo').show();
  $('#headingThree').hide();
  $('#headingFour').hide();
  $('.message').text('Successful Sign Out!');
};


module.exports = {
  failure,
  success,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
