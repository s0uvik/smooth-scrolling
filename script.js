const divTopButton = document.querySelector(".btn-top");
const divMidButton = document.querySelector(".btn-mid");
const divDownButton = document.querySelector(".btn-down");

const divTop = document.querySelector(".div-top");
const divMid = document.querySelector(".div-mid");
const divDown = document.querySelector(".div-down");

// divTopButton.addEventListener("click", function () {
//   divTop.scrollIntoView({ behavior: "smooth" });
// });
// divMidButton.addEventListener("click", function () {
//   divMid.scrollIntoView({ behavior: "smooth" });
// });
// divDownButton.addEventListener("click", function (event) {
//   divDown.scrollIntoView({ behavior: "smooth" });
// });

////////////////////////////////////////////////////////////////
document
  .querySelector(".button-container")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-top")) {
      divTop.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.classList.contains("btn-mid")) {
      divMid.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.classList.contains("btn-down")) {
      divDown.scrollIntoView({ behavior: "smooth" });
    }
  });
