$(document).ready(function () {
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var planeImg = $("#planeImg");

    if (isInViewport(planeImg[0])) {
      planeImg.css("opacity", "1");
      planeImg.css("animation", "slideIn 0.5s ease-in-out");
    }
  }

  $(window).on("scroll", handleScroll);

  handleScroll();
});

// Animation

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveal.length; i++) {
    let windowsheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
