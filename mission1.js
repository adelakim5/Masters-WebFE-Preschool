let results = [];
Object.entries(data).forEach((item) => {
  const [key, value] = item;
  for (let [value__key, value__value] of Object.entries(value)) {
    if (typeof value__value === "number") results.push(value__key);
  }
});
console.log(results);
