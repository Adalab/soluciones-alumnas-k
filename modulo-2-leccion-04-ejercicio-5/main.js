"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.error("Error: no encuentro el selector " + selector);
  } else {
    console.log("El selector encontrado está en " + element);
    return element;
  }
}

const btnEl = getEl(".btn");
console.log("El botón retornado es ", btnEl);
const titleEl = getEl("h1");
console.log("El botón retornado es ", titleEl);
