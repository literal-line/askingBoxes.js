// customizable asking-boxes for HTMLifier


// set up variables
var askingBox = document.getElementById('asking-box').style;
var question = document.getElementById('question').style;
var answer = document.getElementById('answer').style;

console.log('askingBoxes.js loaded!');
console.log('v1.0 by Literal Line');


// setup new box appearance, supports specific locations, etc.
function initBox() {
    askingBox.position = 'absolute';
    askingBox.top = '50%';
    askingBox.left = '50%';
    askingBox.transform = 'translate(-50%, -50%)';
    askingBox.border = '1px solid #000000';
    askingBox.borderRadius = '3px';
    askingBox.padding = '5px';

    question.padding = '5px';
    
}





initBox();