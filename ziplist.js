const testListOne = ['a', 'b', 'c'];
const testListTwo = [1, 2, 3];

function zipList(listOne, listTwo) {
  const result = [];
  for (let i = 0; i < listOne.length; i++) {
    result.push(listOne[i]);
    result.push(listTwo[i]);
  }
  return result;
}

console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}
console.log(zipListTheSimpleWay(testListOne, testListTwo));
