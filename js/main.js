document.addEventListener("DOMContentLoaded", function() {
  setVh();
  collapseNav();
  var scroll = new SmoothScroll('a[href*="#"]');
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1
  }).mount();

  let body = document.getElementsByTagName("html")[0];

  const trigger = document.getElementById("menu-trigger");
  if (trigger) {
    trigger.addEventListener("click", function() {
      body.classList.add("menu-opened");
    });
  }

  const closeMenu = document.getElementById("close-menu");
  if (closeMenu) {
    closeMenu.addEventListener("click", function() {
      body.classList.remove("menu-opened");
    });
  }

  let buttons = document.querySelectorAll("header nav a");
  if (buttons.length) {
    buttons.forEach(element => {
      element.addEventListener("click", () => {
        body.classList.remove("menu-opened");
      });
    });
  }

  (function() {
    function $MPC_load() {
      window.$MPC_loaded !== true &&
        (function() {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            document.location.protocol +
            "//secure.mlstatic.com/mptools/render.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        })();
    }
    window.$MPC_loaded !== true
      ? window.attachEvent
        ? window.attachEvent("onload", $MPC_load)
        : window.addEventListener("load", $MPC_load, false)
      : null;
  })();
});

window.onscroll = function() {
  collapseNav();
};

function collapseNav() {
  var header = document.getElementById("main-header");
  if (window.pageYOffset > 10) {
    header.classList.add("collapse");
  } else {
    header.classList.remove("collapse");
  }
}

window.addEventListener("resize", () => {
  setVh();
});

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
