let navImg = document.querySelector(".logo");
let progressBar = document.querySelector(".progress-bar")
const b = navImg.getAttribute("class");
let viewportHeight = window.innerHeight;
let initialState = true;
let Pageheight = document.body.scrollHeight;

function navScroll() {
    if (window.pageYOffset > 0) {
        navImg.style.height = `2rem`;
        progressBar.style.height = `0.25rem`;
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = `clamp(0px, calc(${scrolled}% + 2.5rem), 100%)`;
        navImg.style.left = `clamp(0px, ${scrolled}%, calc(100% - ${navImg.offsetWidth}px - 0.75rem)`;
        return
    }
    progressBar.style.height = `0`;
    navImg.style.height = `3rem`;
    navImg.top = 0;
    navImg.left = 0;
}

const colorButton = document.querySelectorAll(".color");
const colorButtonArray = ["blue", "orange", "yellow"];
function colorButtonClicker() {
    for (let i = 0; i < colorButton.length; i++) {
        colorButton[i].addEventListener('click', () => {
            document.documentElement.style.setProperty('--background', `var(--${colorButtonArray[i]})`);
    });
    }
}
colorButtonClicker()


window.onscroll = function () {navScroll()}