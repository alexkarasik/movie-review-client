'use strict';

const success = () => {
  $('.message').text('SUCCESS!');
};

const failure = () => {
  $('.message').text('ERROR!');
};

const signUpSuccess = () => {
  //$('#collapseOne').hide();
  $('#sign-up')[0].reset();
  $('.message').text('Successful Sign Up!');
};

const changePasswordSuccess = () => {

  $('.message').text('Password Changed!');
};

const signInSuccess = () => {
   $('#sign-up').val('');
   $
  //  $('#sign-up').hide();
   //$('.hide-sign').hide();
   $('#headingOne').hide();
   $('#headingTwo').hide();
   $('#collapseTwo').hide();
  //  $('#change-password').show();
  //  $('.after-signin').show();
  //  $("#collapseFive").show();
  //  $("#headingFive").show();
  //  $("#collapseFour").show();
  //  $("#headingFour").show();
  //  $("#collapseThree").show();
  //  $("#headingThree").show();

   $('.message').text('Successful Sign In!');
   $('#sign-in')[0].reset();
};
const signOutSuccess = () => {
$('.after-signin').hide();
$('#change-password').hide();
//$('#change-password').hide();
$("#collapseFive").hide();
$("#headingFive").hide();
$("#collapseFour").hide();
$("#headingFour").hide();
$("#collapseThree").hide();
$("#headingThree").hide();


$('.hide-sign').show();
$('#headingOne').show();


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
