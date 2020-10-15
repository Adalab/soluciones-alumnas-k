"use strict";
var listTitles = document.querySelectorAll(".list-title");
var listItems = document.querySelectorAll(".list-item");
var checked = document.querySelectorAll(".check");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: false },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
  {
    name: "Aprender cosas",
    completed: false,
  },
];

/* for (let index = 0; index < tasks.length; index++) {
  listTitles[index].innerHTML += tasks[index].name;
  if (tasks[index].completed === true) {
    listItems[index].classList.add("completed");
    checked[index].setAttribute("checked", true);
  }
} */

let codeHTML = "";
for (let index = 0; index < tasks.length; index++) {
  <li class="list-item">
    <input class="check" id="nuevo" type="checkbox" name="prodnuevo" />
    <span class="list-title"></span>
  </li>;
}
