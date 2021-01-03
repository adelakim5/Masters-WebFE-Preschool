let funcs = [];

function getArea(flag, a, b, c) {
  let answer = 0;
  switch (flag) {
    case "circle":
      if (b === undefined && c === undefined) answer = a * a * 3.14;
      else answer = sumCircle(b, a);
      break;
    case "rect":
      answer = a * b;
      break;
    case "trapezoid":
      answer = ((a + b) * c) / 2;
      break;
    case "printExecutionSequence":
      answer = printExecutionSequence();
  }
  funcs.push({ func: flag, result: answer });
  return answer;
}

function sumCircle(b, a) {
  if (b <= a) return a * a * 3.14;
  return b * b * 3.14 + sumCircle(b - 1, a);
}

function printExecutionSequence() {
  funcs.forEach((item) => {
    console.log(`함수: ${item.func}, 결과: ${item.result}`);
  });
}

getArea("circle", 2);
getArea("rect", 2, 3);
getArea("circle", 3, 5);
printExecutionSequence();
