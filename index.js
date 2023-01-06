let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}

//console.log(inception());

function factorialRecursive(number) {
  if (number <= 2) {
    return (number * 1);
  }
  return number * factorialRecursive(number - 1);
}

//console.log(factorialRecursive(5));

function factorialIterative(number) {
  let total = number;
  for (let i = number - 1; i > 1; i--) {
    total = total * i;
  }
  return total;
}

//console.log(factorialIterative(5));

function fibonacciIterative(number) {
  if (number <= 1) {
    return number;
  }
  let tempA = [];
  for (i = 0; i <= number; i++) {
    if (i <= 1) {
      tempA.push(i);
      continue;
    }
    let varOne = (tempA[i - 1]) + (tempA[i - 2]);
    tempA.push(varOne);
  }
  return tempA[number];
}

console.log(fibonacciIterative(12));

//fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacciRecursive(number) {
  if (number <= 1) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log(fibonacciRecursive(12));