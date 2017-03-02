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

const changePasswordSuccess = () => {
  $('.message').text('Password Changed!');
};

const signInSuccess = () => {
   $('#sign-up').val('');
   $('#sign-up').hide();
   $('#sign-in').hide();
   $('#headingOne').hide();
   $('#headingTwo').hide();
   $('#change-password').show();
   $('.after-signin').show();
   $('.message').text('Successful Sign In!');
   $('#sign-in')[0].reset();
};
const signOutSuccess = () => {
  $('.after-signin').hide();
$('#change-password').hide();

//$('.message').hide();
// $('.games-played').hide().val('');
$('#sign-in').show();
$('#sign-up').show();
// if (data) {
//   console.log(data);
// }
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
