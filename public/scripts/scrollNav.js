window.addEventListener("scroll", function () {
  const navScroll = document.querySelector(".header");

  if (window.scrollY >= 200) {
    navScroll.classList.add("scrolling-nav");
  } else {
    navScroll.classList.remove("scrolling-nav");
  }
});
