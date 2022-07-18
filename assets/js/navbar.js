console.log('Loaded navbar.js');


window.onscroll = function() {myFunction()};
  
var navbar = document.getElementById("sticky-navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("d-block")
  $("#nav-nick-sticky").css({"visibility": "visible"})
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("d-block");
  $("#nav-nick-sticky").css({"visibility": "hidden"});
  }
}
function openNav() {
  document.getElementById("nav").style.width = "100%";
}
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}