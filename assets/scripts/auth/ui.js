'use strict';

const success = () => {
  $('.message').text('SUCCESS!');
};

const failure = () => {
  $('.message').text('ERROR!');
};

$('#headingThree').hide();
$('#headingFour').hide();
$('#headingFive').hide();


const signUpSuccess = () => {
  //$('#collapseOne').hide();
  $('#collapseOne').hide();
  $('#sign-up')[0].reset();
  $('.message').text('Successful Sign Up!');
};

const changePasswordSuccess = () => {

  $('.message').text('Password Changed!');
};

const signInSuccess = () => {
   $('#sign-up').val('');
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
  $('#headingThree').show();
  $('#headingFour').show();
  $('#headingFive').show();

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
$('#collapseOne').hide();
$('#collpaseTwo').hide();
$('#sign-up').hide();


//$('.hide-sign').show();
$('#headingOne').show();
$('#collapseOne').show();
$('#collpaseTwo').show();
$('#headingTwo').show();



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
