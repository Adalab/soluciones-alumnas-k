"use strict";

const body = document.querySelector(".body");

function result(ev) {
  if (ev.key === "r") {
    body.classList.add("background-red");
    body.classList.remove("background-purple");
  } else if (ev.which === 109) {
    body.classList.remove("background-red");
    body.classList.add("background-purple");
  } else {
    console.log("No es la tecla correcta");
  }
}

document.addEventListener("keypress", result);
