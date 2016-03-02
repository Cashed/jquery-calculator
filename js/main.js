'use strict';
(function() {
  $(document).ready(function() {
    var operator;
    var operand = '';
    var operands = [];

    function buttonPress() {
      if ($(this).hasClass('operator')) {
        if ($(this).text() === '=') {
          operands.push(operand);
          operand = '';
          clearScreen();
          calculate();
        }
        else {
          operator = $(this).text();
          operands.push(operand);
          operand = '';
          clearScreen();
        }
      }
      else {
        operand += $(this).text();
        writeScreen($(this).text());
      }
    }

    function calculate() {
      var total = 0;
      var operand1 = parseInt(operands[0]);
      var operand2 = parseInt(operands[1]);

      if(operator === '+') {
        total = operand1 + operand2;
      }
      else if(operator === '-') {
        total = operand1 - operand2;
      }
      else if(operator === 'x') {
        total = operand1 * operand2;
      }
      else {
        total = operand1 / operand2;
      }
      writeScreen(total);
    }

    function writeScreen(num) {
      var contents = $('#screen').text();
      contents += num;
      $('#screen').text(contents);
    }

    function clearScreen() {
      var clear = '';
      $('#screen').text(clear);
    }

    function clearAll() {
      operator = '';
      operand = '';
      operands = [];
      clearScreen();
    }

    $('.buttons span').on('click', buttonPress);
    $('#cancel').on('click', clearAll);
  });
})();
