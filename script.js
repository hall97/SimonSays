"strict";

// Elements
const tileOne = document.querySelector(".tile--red");
const tileTwo = document.querySelector(".tile--blue");
const tileThree = document.querySelector(".tile--yellow");
const tileFour = document.querySelector(".tile--purple");
const tileFive = document.querySelector(".tile--pink");
const tileSix = document.querySelector(".tile--brown");

const command = document.querySelector(".command--display");

// Variables
let sequence = "";

// Functions
const nextSeqEl = () => Math.floor(Math.random() * 6 + 1);
sequence += nextSeqEl();

const init = function () {
  command.textContent =
    "Copy the sequence displayed here using the buttons below.";
};

const sequenceDisplay = function () {
  for (const el of sequence) {
    command.textContent = el;
    // needs timer
  }
};

init();

sequenceDisplay();
