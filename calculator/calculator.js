module.exports = {
  add
};

function add(args) {
  const numbers = Array.isArray(args) ? args : [...arguments];

  return numbers.reduce((acc, val) => {
    return acc + val;
  }, 0);
}

// function add(a = 0, b = 0) {
//   return a + b;
// }

// function add(...args) {
//   console.log(args);
//   if (typeof args[0] === "object") {
//     return args[0].reduce((acc, val) => {
//       return acc + val;
//     }, 0);
//   } else {
//     return args.reduce((acc, val) => {
//       return acc + val;
//     }, 0);
//   }
// }
const arr = [2, 3, 9, 7];
console.log(add(arr));
