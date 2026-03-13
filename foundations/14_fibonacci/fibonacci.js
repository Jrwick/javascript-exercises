const fibonacci = function (num) {
  let a = 1;
  let b = 1;
  let c = 0;
  if (num == 1 || num == 2) {
    c = 1;
  } else if (num > 2) {
    for (let i = 2; i < num; i++) {
      c = a + b;
      b = a;
      a = c;
    }
  } else if (num < 0) {
    return "OOPS";
  }
  return c;
};

// Do not edit below this line
module.exports = fibonacci;
