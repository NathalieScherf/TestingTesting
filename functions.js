let input1;
let input2;
let operator;

const setInput = value => {
  if (input1) {
    if (!operator) {
      let twoDigitInput = input1.toString().concat(value);
      input1 = Number(twoDigitInput);
      console.log(typeof(input1));
    }
    input2 = Number(value);
  } else {
    input1 = Number(value);
  }
};

export const displayInput = value => {
  document.getElementById("display").innerHTML = value;
};

const clear = () => {
  input1 = undefined;
  input2 = undefined;
  operator = undefined;
};

const clearDisplay = () => {
  document.getElementById("display").innerHTML = "0";
};

const setOperator = (value) => {
  operator = value;
};

const add = (a, b) => {
  return a + b;
};

export const substract = (a, b) => {
  return a - b;
};

//function for multiplication
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b == 0) {
    return document.getElementById("display").innerHTML ="do not divide by 0, dummy!";
  }
  return a / b;
};

const calculate = () => {
  switch(operator) {
  case "addition":
    document.getElementById("display").innerHTML = add(input1, input2);
    clear();
    break;
  case "substraction":
    document.getElementById("display").innerHTML = substract(input1, input2);
    clear();
    break;
  case "multiplication":
    document.getElementById("display").innerHTML = multiply(input1, input2);
    clear();
    break;
  case "division":
    document.getElementById("display").innerHTML = divide(input1, input2);
    clear();
    break;
  default: 
    console.log('no input defined');
  }
};