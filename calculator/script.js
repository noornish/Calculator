let input = document.getElementById('result');
let originalNumber = null;
let operation = null;

document.getElementById('ac').addEventListener('click', function() {
  clearInput();
});

document.getElementById('backspace').addEventListener('click', function() {
  deleteLastChar();
});

document.getElementById('percentage').addEventListener('click', function() {
  appendValue('%');
});

document.getElementById('divide').addEventListener('click', function() {
  appendValue('/');
});

document.getElementById('seven').addEventListener('click', function() {
  appendValue('7');
});

document.getElementById('eight').addEventListener('click', function() {
  appendValue('8');
});

document.getElementById('nine').addEventListener('click', function() {
  appendValue('9');
});

document.getElementById('multiply').addEventListener('click', function() {
  appendValue('*');
});

document.getElementById('four').addEventListener('click', function() {
  appendValue('4');
});

document.getElementById('five').addEventListener('click', function() {
  appendValue('5');
});

document.getElementById('six').addEventListener('click', function() {
  appendValue('6');
});

document.getElementById('subtract').addEventListener('click', function() {
  appendValue('-');
});

document.getElementById('one').addEventListener('click', function() {
  appendValue('1');
});

document.getElementById('two').addEventListener('click', function() {
  appendValue('2');
});

document.getElementById('three').addEventListener('click', function() {
  appendValue('3');
});

document.getElementById('add').addEventListener('click', function() {
  appendValue('+');
});

document.getElementById('zero').addEventListener('click', function() {
  appendValue('0');
});

document.getElementById('decimal').addEventListener('click', function() {
  appendValue('.');
});

document.getElementById('equals').addEventListener('click', function() {
  calculate();
});

document.getElementById('square').addEventListener('click', function() {
  performSquare();
});

function appendValue(value) {
  input.innerText += value;
}

function clearInput() {
  input.innerText = '';
  originalNumber = null;
  operation = null;
}

function deleteLastChar() {
  input.innerText = input.innerText.slice(0, -1);
}

function calculate() {
  try {
    if (operation === 'square') {
      const result = Math.pow(originalNumber, 2);
      input.innerText = result;
      originalNumber = result;
      operation = null;
    } else {
      input.innerText = eval(input.innerText);
      originalNumber = null;
    }
  } catch (error) {
    input.innerText = 'Error';
  }
}

function performSquare() {
  if (originalNumber === null) {
    originalNumber = parseFloat(input.innerText);
    input.innerText += '^2';
  }
  operation = 'square';
}



