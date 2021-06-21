let icon_up = document.getElementsByClassName("icon-up")[0];
console.log(icon_up);

icon_up.addEventListener("click", () => {
    window.scrollTo(0,0);
});

let titleGames = document.querySelectorAll(".card-game");

for (const title of titleGames) {
    title.addEventListener("click", () => {
        console.log(title.getElementsByTagName("h2")[0]);
        alert(`Anda memilih game ${title.getElementsByTagName("h2")[0].innerText}`)
    })
}
