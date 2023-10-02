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
        progressBar.style.width = `calc(${scrolled}% + 2.5rem)`;
        navImg.style.left = `${scrolled}%`;
        return
    }
    progressBar.style.height = `0`;
    navImg.style.height = `3rem`;
    navImg.top = 0;
    navImg.left = 0;
}

const cdImage = document.querySelector(".main__image");
function cdAnim() {
    if (window.pageYOffset > 0) {
        cdImage.style.animationPlayState = 'running';
        cdImage.style.animation = "1.5s linear 0s infinite normal none running cd-anim-right";
        cdImage.style.left = "100%";
        cdImage.style.translate = "-20% -50%";
        cdImage.style.opacity = `100%`;
        return
    }
    cdImage.style.left = "50%";
    cdImage.style.translate = "-50% -50%";
    cdImage.style.opacity = `20%`;
    setTimeout(() => {
        cdImage.style.opacity = `0`;
    }, 2000);
}

window.onscroll = function () {navScroll(); cdAnim()}

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

window.onscroll = function () {navScroll(); cdAnim()}