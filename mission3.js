const myReduce = (arr, callback, initialValue) => {
  arr.forEach((value) => {
    initialValue = callback(value, initialValue);
  });
  return initialValue;
};

let test1 = ["i", "j", "k"];
let test2 = [1, 2, 3, 4];
let test3 = [40, 30, 20, 10];
const result1 = myReduce(
  test1,
  (next, prev) => {
    prev.push(next);
    return prev;
  },
  []
);
const result2 = myReduce(
  test2,
  (next, prev) => {
    prev += next;
    return prev;
  },
  0
);
const result3 = myReduce(
  test3,
  (next, prev) => {
    prev -= next;
    return prev;
  },
  100
);
console.log(result1);
console.log(result2);
console.log(result3);
