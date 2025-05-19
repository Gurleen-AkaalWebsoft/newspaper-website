window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 150) {
      header.classList.add("sticky-header", "animate__animated", "animate__slideInDown");
    } else {
      header.classList.remove("sticky-header", "animate__animated", "animate__slideInDown");
    }
  });
  document.addEventListener("contextmenu", function (e){
    e.preventDefault();
});

