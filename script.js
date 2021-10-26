'strict';

// Elements
const tileZero = document.querySelector('.tile--red');
const tileOne = document.querySelector('.tile--blue');
const tileTwo = document.querySelector('.tile--yellow');
const tileThree = document.querySelector('.tile--purple');
const tileFour = document.querySelector('.tile--pink');
const tileFive = document.querySelector('.tile--brown');

const command = document.querySelector('.command--display');
const reset = document.querySelector('.reset');

// Variables
let sequence = [];
let userSeq = [];
let active = false; // Disables event handlers while seq is displaying

const tileNumberToColour = ['Red', 'Blue', 'Yellow', 'Purple', 'Pink', 'Brown'];
const winLen = 6;

// Functions \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////////////////
const nextSeqEl = () => sequence.push(Math.floor(Math.random() * 6));
nextSeqEl();

// Interval timer for showing the colour sequence.
const seqDisplay = function () {
  let count = 0;
  const timer = setInterval(function () {
    if (count === sequence.length) {
      command.textContent = 'Enter the sequence using the buttons';
      active = true;
      clearInterval(timer);
    } else {
      command.textContent = tileNumberToColour[Number(sequence[count])];
      // Flashes dashes so that repeating colours can be distingushed easily.
      setTimeout(function () {
        command.textContent = '  ---- ';
      }, 750);
      count++;
    }
  }, 1000);
};
seqDisplay();

const startAgain = function () {
  sequence = [];
  userSeq = [];
  nextSeqEl();
  active = false;
  seqDisplay();
};

// Check sequeunce and if complete starts next round or restarts game when wrong.
const seqCheck = function () {
  if (
    userSeq.length === sequence.length &&
    userSeq.join('') === sequence.join('')
  ) {
    if (userSeq.length === winLen) {
      command.textContent = 'Well done! You beat Simon! 🏆';
    } else {
      command.textContent = 'Sequence correct!';
      nextSeqEl();
      userSeq = [];
      active = false;
      setTimeout(seqDisplay, 1000);
    }
  } else if (userSeq.length === sequence.length && userSeq !== sequence) {
    command.textContent = 'Incorrect, try again';
    startAgain();
  }
};

// Event handlers
tileZero.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(0);
  seqCheck();
});

tileOne.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(1);
  seqCheck();
});

tileTwo.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(2);
  seqCheck();
});

tileThree.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(3);
  seqCheck();
});

tileFour.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(4);
  seqCheck();
});

tileFive.addEventListener('click', function () {
  if (!active) return;
  userSeq.push(5);
  seqCheck();
});

reset.addEventListener('click', startAgain);
