'strict';

// Elements
const tileZero = document.querySelector('.tile--red');
const tileOne = document.querySelector('.tile--blue');
const tileTwo = document.querySelector('.tile--yellow');
const tileThree = document.querySelector('.tile--purple');
const tileFour = document.querySelector('.tile--pink');
const tileFive = document.querySelector('.tile--brown');

const command = document.querySelector('.command--display');

// Variables
let sequence = [];
let userSeq = [];
const tileNumberToColour = ['Red', 'Blue', 'Yellow', 'Purple', 'Pink', 'Brown'];

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
      clearInterval(timer);
    }
    command.textContent = tileNumberToColour[Number(sequence[count])];
    count++;
  }, 1000);
};
seqDisplay();

// Check sequeunce and if complete starts next round or restarts game when wrong.
const seqCheck = function () {
  if (
    userSeq.length === sequence.length &&
    userSeq.join('') === sequence.join('')
  ) {
    command.textContent = 'Sequence correct!';
    nextSeqEl();
    setTimeout(seqDisplay, 1000);
  }
  if (userSeq.length === sequence.length && userSeq !== sequence)
    command.textContent = 'Incorrect, try again';
  sequence = [];
  userSeq = [];
};

// Event handlers
tileZero.addEventListener('click', function () {
  userSeq.push(0);
  seqCheck();
});

tileOne.addEventListener('click', function () {
  userSeq.push(1);
  seqCheck();
});

tileTwo.addEventListener('click', function () {
  userSeq.push(2);
  seqCheck();
});

tileThree.addEventListener('click', function () {
  userSeq.push(3);
  seqCheck();
});

tileFour.addEventListener('click', function () {
  userSeq.push(4);
  seqCheck();
});

tileFive.addEventListener('click', function () {
  userSeq.push(5);
  seqCheck();
});
