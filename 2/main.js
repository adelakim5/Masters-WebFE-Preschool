let res = calculateRect(5, 10);
console.log(res);

function calculateCircle(r) {
  try {
    if (isNumber(r)) return r * r * 3.14;
  } catch (e) {
    return e;
  }
}

function calculateRect(width, height) {
  try {
    if (isNumber(width) && isNumber(height)) return width * height;
  } catch (e) {
    return e;
  }
}

function calculateTrapezoid(top, bottom, height) {
  try {
    if (isNumber(top) && isNumber(height) && isNumber(bottom)) return ((top + bottom) * height) / 2;
  } catch (e) {
    return e;
  }
}

function calculateCylinder(r, height) {
  try {
    let pi = 3.14;
    if (isNumber(r) && isNumber(height)) return 2 * Math.pow(r, 2) * pi + 2 * r * height * pi;
  } catch (e) {
    return e;
  }
}

function isNumber(n) {
  if (n === undefined) throw new Error("Undefined");
  if (typeof n === "number") return true;
  throw new Error("Wrong Number");
}
