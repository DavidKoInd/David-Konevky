const logoElement = document.querySelector(".logo");
const progressBar = document.querySelector(".progress-bar");
const colorButtons = document.querySelectorAll(".color");
const colorNames = ["blue", "orange", "yellow"];
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const pageHeight = document.body.scrollHeight;

function updateProgressBar() {
    const scrollPercentage = (window.pageYOffset / (pageHeight - viewportHeight)) * 100;
    progressBar.style.width = `clamp(0px, calc(${scrollPercentage}% + 2.5rem), 100%)`;
    logoElement.style.left = `clamp(0px, ${scrollPercentage}%, calc(100% - ${logoElement.offsetWidth}px - 0.75rem)`;
}

function handleScroll() {
    if (window.pageYOffset > 0) {
        logoElement.style.height = `2rem`;
        progressBar.style.height = `0.25rem`;
    } else {
        progressBar.style.height = `0`;
        logoElement.style.height = `3rem`;
        logoElement.style.top = 0;
        logoElement.style.left = 0;
    }
    updateProgressBar();
}

function setColorButtonClickListeners() {
    colorButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            colorButtons.forEach((btn) => {
                btn.classList.remove('selected');
            });
            button.classList.add('selected');
            document.documentElement.style.setProperty('--background', `var(--${colorNames[i]})`);
        });
    });
}

function setViewportHeight() {
    document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
  }
  

setColorButtonClickListeners();
setViewportHeight();
window.addEventListener('scroll', handleScroll);