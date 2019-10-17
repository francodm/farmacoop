var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar")

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 100){
      navbar.classList.add("visible")
      navbar.classList.remove("transparent")
  } else {
      navbar.classList.add("transparent")
  }
} 