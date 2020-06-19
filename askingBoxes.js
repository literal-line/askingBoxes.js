// customizable asking-boxes for HTMLifier


// set up variables
var askingBox = document.getElementById('asking-box').style;
var question = document.getElementById('question').style;
var answer = document.getElementById('answer').style;

console.log('askingBoxes.js loaded!');
console.log('v1.0 by Literal Line');
console.log('');
console.log('Remember to remove the asking-box, question, and answer styles specified in the HTML file!');


// setup new box appearance, supports specific locations, etc.
function initBox() {
    askingBox.position = 'absolute';
    askingBox.top = '50%';
    askingBox.left = '50%';
    askingBox.transform = 'translate(-50%, -50%)';
    askingBox.minWidth = '400px';
    askingBox.border = '1px solid #000000';
    askingBox.borderRadius = '3px';
    askingBox.padding = '5px';
    askingBox.backgroundColor = 'rgba(255, 255, 255, 0.75';
    askingBox.fontFamily = 'sans-serif';
    askingBox.fontSize = '16pt';

    question.minWidth = '90%';
    question.margin = '10px';
    question.marginTop = '55px';
    question.whiteSpace = 'nowrap';

    answer.minWidth = '90%';
    answer.margin = '10px';
    answer.padding = '3px';
}

// box location function
function boxLocation(leftpx, toppx) {
    askingBox.left = String(leftpx) + '%';
    askingBox.top = String(toppx) + '%';
}


initBox();