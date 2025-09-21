let cookies = 0;
let cookiesPerClick = 1;
let cps = 1;

const cookieButton = document.getElementById("cookiebutton");
const cookiesElement = document.getElementById("cookies");
const cookiesPerClickElement = document.getElementById("cookies-per-click");
const cookiesPerSecondElement = document.getElementById("cps");

cookiesElement.textContent = `Cookies: ${cookies}`;
cookiesPerSecondElement.textContent = `Cookies per second: ${cps}`;
cookiesPerClickElement.textContent = `Cookies per click: ${cookiesPerClick}`;

cookieButton.addEventListener("click", () => {
  cookies += cookiesPerClick;
  cookiesElement.textContent = `Cookies: ${cookies}`;
});

setInterval(function () {
  cookies += cps;
  cookiesElement.textContent = `Cookies: ${cookies}`;
}, 1000);
