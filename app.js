let cookies = 0;

let cookiesPerClick = 1;

let cps = 1;

const cookieButton = document.getElementById("cookiebutton");
const cookiesElement = document.getElementById("cookies");
const cookieElement = document.getElementById("cookie");
const cookiesPerClickElement = document.getElementById("cookies-per-click");
const cookiesPerSecondElement = document.getElementById("cps");

cookieButtons.addEventListener("click", () => {
  cookies += cookiesPerClick;
  cookieElement.textContent = `cookies: ${cookies}`;
});

setInterval(function () {
  cookies += cps;
  cookiesElement.textContent = `Cookies: ${cookies}`;
}, 1000);
