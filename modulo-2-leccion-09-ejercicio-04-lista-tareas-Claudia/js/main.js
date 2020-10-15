'use strict';

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: false
  },
  {
    name: 'Comprar pilas',
    completed: false
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: true
  }
];

// paint

function paintTasks() {
  const listElement = document.querySelector('.js-list');
  listElement.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    let completedClass;
    let checkeAttr;
    if (tasks[i].completed === true) {
      completedClass = 'completed';
      checkeAttr = 'checked';
    } else {
      completedClass = '';
      checkeAttr = '';
    }

    listElement.innerHTML += `<li class="${completedClass}">
    <input type="checkbox" ${checkeAttr} class="js-list-check" id="${i}">
    <span>${tasks[i].name}</span>
    </li>`;
  }
}

// listen events

function toggleTast(ev) {
  const clickedId = ev.target.id;
  tasks[clickedId].completed = !tasks[clickedId].completed;
  paintTasks();
  listenEvents();
}

function listenEvents() {
  const checkboxElements = document.querySelectorAll('.js-list-check');
  for (const checkboxElement of checkboxElements) {
    checkboxElement.addEventListener('change', toggleTast);
  }
}

// start app

paintTasks();
listenEvents();
