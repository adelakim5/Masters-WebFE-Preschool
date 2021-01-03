let results = [];
function getSk(array) {
  array.forEach((person) => {
    if (person.type === "sk") results.push(person.name);
    if (person.childnode.length) getSk(person.childnode);
  });
}

getSk(nodes);

console.log(results);
