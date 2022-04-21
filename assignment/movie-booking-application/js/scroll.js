let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    let windowWidth = window.innerWidth;
    if (scrollpos > 100 && windowWidth > 992) {
        header.classList.add("header-flex");
    } else {
        header.classList.remove("header-flex");
    }
});
