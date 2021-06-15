let icon_up = document.getElementsByClassName("icon-up")[0];
console.log(icon_up);

icon_up.addEventListener("click", () => {
    window.scrollTo(0,0);
});