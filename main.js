// display hamburger menu

// Jquery
/* 
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".hamburger-menu").show();
  }); // open menu on click

  $(".close").click(function () {
    $(".hamburger-menu").hide();
  }); // close menu
});
*/


// plain javascript
const openIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.hamburger-menu'); 
const closeIcon = document.querySelector('.close');

openIcon.onclick = function (){
  navMenu.classList.add('active');
};

closeIcon.onclick = function (){
  navMenu.classList.remove('active');
};