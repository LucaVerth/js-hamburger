// display hamburger menu

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".hamburger-menu").show();
  }); // open menu on click

  $(".close").click(function () {
    $(".hamburger-menu").hide();
  }); // close menu
});
