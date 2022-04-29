let stars = document.querySelectorAll("[data-star]");
let submit = document.getElementById("submit");
let cardThanks = document.getElementById("main-secondPage");
let cardNote = document.getElementById("card-note");
let yourNote = document.getElementById("your-note");


for(let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", () => {
        let star = stars[i].innerHTML;
        for(let i = 0; i < stars.length; i++) {
            stars[i].classList.contains('selected');
            stars[i].classList.remove('selected');
        }
        stars[i].classList.add('selected');
        submit.addEventListener("click", () => {
            cardNote.style.display = "none";
            cardThanks.style.display = "inline-block";
            yourNote.innerHTML = star;
        })
    })
}

