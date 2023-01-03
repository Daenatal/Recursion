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

console.log(factorialRecursive(5));

function factorialIterative(number) {
  let total = number;
  for (let i = number - 1; i > 1; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorialIterative(5));