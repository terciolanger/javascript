// When the user scrolls the page, execute myFunction
window.onscroll = function() { Function_cabFixo() };
//Function_cabFixo
// Get the header
var header = document.getElementById("cabFixo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
Function_cabFixo(document).ready(function(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
/*

$(document).ready(function() {
    YOUR_CODE_HERE
  });
  
  window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
  */
