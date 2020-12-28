function firstFunc() {
  secondFunc();
  for (let i = 0; i < 1; i++) {
    console.log(`first: ${i}`);
  }
}

function secondFunc() {
  thirdFunc();
  for (let i = 0; i < 2; i++) {
    console.log(`second: ${i}`);
  }
}

function thirdFunc() {
  for (let i = 0; i < 3; i++) {
    console.log(`third: ${i}`);
  }
}

firstFunc();
