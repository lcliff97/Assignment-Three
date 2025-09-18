let cookies = 0;

let cookiesPerClick = 1;

let cps = 1;

const cookieElement = document.getElementById("cookie");
const cookiesPerClickElement = document.getElementById("cookies-per-click");
const cookiesPerSecondElement = document.getElementById("cps");

cookieElement.addEventListener(
  "click",
  () => {
    cookiebutton + cookiesPerClick;
    cookieElement.textContent = `cookiebutton: ${cookies}`;
  },
  1000
);

setInterval(function () {
  cookies += cps;
  console.log(cookies);
}, 1000);

fetch("https://cookie-upgrade-api.vercel.app/api/upgrades").then((response) => {
  response.json();
});
