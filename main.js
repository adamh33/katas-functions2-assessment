function add(a, b) {
  return a + b;
}
let a = add(2, 2);
console.log(a);

function multiply(a, b) {
  let answer = 0;
  let count = 0;
  while (count < b) {
    answer = add(a, answer);
    count = add(count, 1);
  }
  return answer;
}

let m = multiply(4, 4);
console.log(m);

function power(x, n) {
  let answer = 1;
  let count = 0;
  while (count < n) {
    answer = multiply(x, answer);
    count = add(count, 1);
  }
  return answer;
}

let p = power(3, 4);
console.log(p);

function factorial(f) {
  let answer = 1;
  let count = 1;
  while (count <= f) {
    answer = multiply(answer, count);
    count = add(count, 1);
  }
  return answer;
}

let f = factorial(5);
console.log(f);
